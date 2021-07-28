---
layout: default
title: "Lecture 25: Database Applications, JDBC"
---

In [Lab 23](../labs/lab23.html) we experimented with [Derby](https://db.apache.org/derby/) by typing queries interactively (using a simple front-end program).

Another very useful way to interact with a database is from a program that you write. Programs which communicate with a database are often referred to as *database applications*.

JDBC is the standard Java API for writing database applications. It provides a common set of functions for accessing and modifying data in SQL databases.

JDBC Concepts
=============

Here are some of the basic JDBC concepts you will employ.

Drivers
-------

A JDBC *driver* is a code library which implements the JDBC API for a particular back-end database. Most popular relational databases include a JDBC driver.

Generally, to add support for a particular database implementation to your application, you will include its JDBC driver in your project. Your application will need to *load* the driver by instantiating its main class.

Connections
-----------

A JDBC *connection* is an object that allows your application to communicate with a particular instance of the database.

Connections are specified as URL strings. The URL string encodes both the driver to be used and also the location of the database.

The JDBC **DriverManager** class creates connection objects.

PreparedStatement
-----------------

A *prepared statement* object represents a particular query or insert/update/delete statement to be executed.

A prepared statement may contain *placeholders* for information that will be "filled in" when the statement is executed. This allows the same statement to be executed many times, supplying different data each time.

For example: here is a query that searches for books matching a particular title:

    select authors.author_lastname, authors.author_firstname, books.title, books.isbn
        from authors, books
        where authors.author_id = books.author_id
              and books.title = ?

The question mark (**?**) is a placeholder for a particular book title. So, this query is a general "template" for finding books given a title. If we make this query a prepared statement, we can use it as many times as desired to find books matching various titles. Each time we execute the prepared statement, we will substitute a specific title for the placeholder.

ResultSet
---------

A *result set* is returned as the result of executing a prepared statement. The result set is essentially an iterator for the tuples returned as the result of the query.

The data types of the returned attribute values are mapped onto Java data types. Typical mappings include:

> SQL type | Java type
> -------- | ---------
> VARCHAR | java.lang.String
> INTEGER | java.lang.Integer
> DATE | java.sql.Date
