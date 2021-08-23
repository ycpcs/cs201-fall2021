---
layout: default
title: "Lab 16: Generic Algorithms"
---

## Getting Started

Download [CS201\_Lab16\_Gradle.zip](CS201_Lab16_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab16\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab16\_Gradle** in the Project window.

**There is no executable application for this lab.** Instead, we will test the class implementation by running the unit tests by right-clicking on the file **AlgorithmsTest.java** in the **src/test/java/** directory, and then choosing

> **Run 'AlgorithmsTest'**

Or subsequently by selecting **AlgorithmsTest** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Your task is to implement the five static methods defined in the **Algorithms** class.  *Note*: implement these yourself using an explicit traversal of the input collection, i.e., don't just call a method in **java.util.Collections**.

Hint for the **findMin** and **findMax** methods: you may assume that the collection will have at least one element.

**static&lt;E extends Comparable&lt;E&gt;&gt; E findMin(Collection&lt;E&gt; c)**  
This method should return the minimum (smallest) value in the given **Collection**. Since each element belongs to a class implementing the **Comparable&lt;E&gt;** interface, you can use the **compareTo** method to compare element values.

**static&lt;E extends Comparable&lt;E&gt;&gt; E findMax(Collection&lt;E&gt; c)**  
Like **findMin** above, but return the maximum element value instead of the minimum.

**static&lt;E&gt; E findMin(Collection&lt;E&gt; c, Comparator&lt;E&gt; comp)**  
Like the version of **findMin** that just takes a **Collection**, but uses the **Comparator** parameter to do the element comparisons.

**static&lt;E&gt; E findMax(Collection&lt;E&gt; c, Comparator&lt;E&gt; comp)**  
Like **findMin** above, but return the maximum element value instead of the minimum.

**static&lt;E&gt; int sequentialSearch(List&lt;E&gt; list, E searchVal)**  
Do a sequential search of the given **List**. Return the index of the first occurrence of an element comparing as equal to **searchVal**, or -1 if **searchVal** does not occur in the list. Use the **equals** method to do the comparisons.

## Super-duper extra challenge

*Optional*: if you finish the above tasks, and your brain isn't completely twisted in knots, rewrite the four **findMin** and **findMax** methods so that three of them are implemented by making a call to the fourth.

**Hint**: Leave your **static&lt;E&gt; E findMin(Collection&lt;E&gt; c, Comparator&lt;E&gt; comp)** as it is. Change the other methods to call it.

**Another hint**: Defining one or more new **Comparator** classes will help.

Let me know if you figure this one out. I may award a prize.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab16_Gradle</b>
CS201-Fall2021/CS201_Lab16_Gradle
$ <b>make submit</b>
</pre>

Enter your [Marmoset](https://cs.ycp.edu/marmoset) username and password, if successful you should see

<pre>
######################################################################
              >>>>>>>> Successful submission! <<<<<<<<<

Make sure that you log into the marmoset server to manually
check that the files you submitted are correct.

Details:

         Semester:   Fall 2021
         Course:     CS 201
         Assignment: lab16

######################################################################
</pre>
