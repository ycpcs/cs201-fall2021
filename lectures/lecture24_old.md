---
layout: default
title: "Lecture 24: Relational Databases"
---

A *relational database* is a system for storing and accessing data organized into *relations*.

A relation is a bag of *tuples*. Each tuple is an ordered sequence of *attributes*. Each attribute is a data value belonging to some data type. All of the tuples in a relation have the same number of attributes. In addition, the relation has a schema that is imposed on each tuple in the relation, specifying what the data type each attribute in each tuple will have. For example, the relation's schema might specify that the first attribute in each tuple is an integer.

The relation's schema also gives a name to each attribute. The attribute names give us a convenient way of referring to tuple attributes without having to say "the first attribute", "the fourth attribute", etc.

Typical relational databases support numeric and text data types as tuple attributes. Many relational databases also support "BLOBs" (Binary Large OBjects) as attributes. A BLOB is a large, uninterpreted chunk of data. BLOBs are useful for storing files, images, and other large chunks of data in a relational database.

Example relation
================

Let's say we are going to use a relational database to store information about books. We might define a relation called **books** to store information about each book:

> author\_lastname | author\_firstname | title | ISBN
> ---------------- | ----------------- | ----- | ----
> Smallfinger  | F.G.  | A History of Hats | 0-651-65165-4
> Whittlbey | W.H.J. | Guide to Impossible Buildings  | 82-234-5475-0
> Earwig | Lettice | First Flights in Witchcraft | 5-9672-6521-X
> Lightly | W.E. | Habits of the Wolves | 91-33-65168-X
> Tacticus | Callus | Sieges and Survival | 99921-58-10-7
> Tacticus | Callus | VENI VIDI VICI: A Soldier's Life | 84-15978-99-5

In this relation, there are four attributes called **author\_lastname**, **author\_firstname**, **title**, and **ISBN**. Each attribute is a text string.

Databases with multiple relations
=================================

Databases will typically have many relations. One motivation for allowing multiple relations in a database is to avoid storing redundant information. For example, in the relation above, there are two tuples representing books by the same author, **Callus Tacticus**. Because the author name is represented twice, there is the possibility that this information might not be recorded consistently if the relation were modified.

We can avoid this redundancy by splitting the database into two relations, **books** and **authors**:

> The **books** relation:
>
> book\_id | author\_id | title | ISBN
> ---- | ---------- | ----- | ----
> 1 | 1 | A History of Hats | 0-651-65165-4
> 2 | 2 | Guide to Impossible Buildings | 82-234-5475-0
> 3 | 3 | First Flights in Witchcraft | 5-9672-6521-X
> 4 | 4 | Habits of the Wolves | 91-33-65168-X
> 5 | 5 | Sieges and Survival | 99921-58-10-7
> 6 | 5 | VENI VIDI VICI: A Soldier's Life | 84-15978-99-5
>
> The **authors** relation:
>
> author\_id | author\_lastname | author\_firstname
> ---------- | ---------------- | -----------------
> 1 | Smallfinger | F.G.
> 2 | Whittlbey | W.H.J.
> 3 | Earwig | Lettice
> 4 | Lightly | W.E.
> 5 | Tacticus | Callus

The **books** relation has been changed so that the author of each book is represented by a unique integer identifier, the **author\_id** attribute. This attribute also exists in the **authors** relation. So, the author of each book tuple in the **books** relation is represented indirectly, by reference to a matching author tuple in the **authors** relation.

Queries, SQL
============

A *query* is a request to retrieve information from a database.

**SQL**, the **Structured Query Language**, is a standard language for describing queries in relational databases. SQL is an interesting language because it is *declarative*: it describes *what* information is desired, but does not specify *how* that information is to be retrieved. It is the job of the database to figure out how to find the information requested by a query.

Example: let's say we want to find the titles of all books written by **F.G. Smallfinger**. In our original database, in which only the **books** relation exists, we could express that query as follows:

    select title
        from books
        where author_lastname = 'Smallfinger' and author_firstname = 'F.G.'

A SQL **select** statement specifies a query, and has three parts:

-   Which attribute values to retrieve. In the example above, only the **title** attribute is requested.
-   Which relations are involved in the query. In the example above, only the **books** relation is queried.
-   A *condition* describing which tuples contain the desired information. In the example above, the condition requires that tuples were **author\_lastname = 'Smallfinger'** and **author\_firstname = 'F.G.'** are desired.

This query will match a single tuple in the **books** relation, and return a single **title** value, **A History of Hats**.

Joins
=====

A *join* is a query which retrieves information from multiple relations. Joins are a powerful way to exploint *associations* between tuples in different relations. The idea is that a query retrieving information from multiple relations will specify a *join condition* which links attribute values in tuples of two relations.

Let's consider how to find the titles of all books by **F.G. Smallfinger** in the second version of the database, where we have two relations, **books** and **authors**. We will need to do a join of both relations in order to connect the author name and book title, which are now stored in different relations:

    select books.title
        from books, authors
        where books.author_id = authors.author_id
            and authors.author_lastname = 'Smallfinger' and authors.author_firstname = 'F.G.'

Note several interesting details of this query:

-   We are selecting **books.title** as the attribute to retrieve, explicitly noting that this attribute exists in the **books** relation
-   The **from** clause now specifies two relations, **books** and **authors**
-   The first part of the **where** clause, **books.author\_id = authors.author\_id**, is the join condition. It states that when considering pairs of tuples in the **books** and **authors** relations as candidates for retrieval, each tuple must contain the same value for the respective **author\_id** attributes.
-   In the **where** clause, each attribute is qualified by the name of the relation it is a part of. This is especially important when two relations have identically-named attributes, as is the case with the **author\_id** attributes of the **books** and **authors** relations.

Indices
=======

Obviously, a database system must be able to answer all queries by returning the requested information.

An important additional characteristic that database systems should have is that queries are answered *efficiently*, even if the database contains a large amount of data.

An *index* is an auxiliary data structure associated with a relation to increase the efficiency of queries on that relation. Specifically, an index is an auxiliary data structure which, given an attribute value or range of attribute values, quickly locates the tuple or tuples which match that value or range. An index may be applied to a single attribute, or to multiple attributes.

The idea is that an index helps the database focus the search for data matching a query by narrowing the number of tuples that must be checked.

Sequential scans
----------------

Consider queries involving a single relation. Any such query can be answered by performing a *sequential scan* over the tuples in the relation: checking each tuple to see if it matches the condition(s) specified in the **where** clause, and if so, returning the values of the selected attributes.

For very large relations, a sequential scan may do much more work than necessary. In particular, the **where** clause may have sub-conditions that are met by only a very small number of tuples: we say that a condition matched by only a small number of tuples has high *selectivity*.

To answer queries as efficiently as possible, the database should limit its scan to as small a subset of tuples as possible. This can be done using an *index*.

For example: let's say that in the book database, we will frequently need to search for authors by last name. To make those queries more efficient, we can build an index on the **author\_lastname** attribute. Queries such as

    select author_id from authors where author_lastname = 'Smith';

can be answered efficiently because the index on **author\_lastname** will allow the database to ignore tuples in which the value of that attribute is not 'Smith'.
