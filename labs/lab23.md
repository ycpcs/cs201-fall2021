---
layout: default
title: "Lab 23: Binomial Coefficient"
---

## Getting Started

Download [CS201\_Lab23\_Gradle.zip](CS201_Lab23_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab23\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab23\_Gradle** in the Project window.

Run the program by right-clicking on the file **TestDriver.java** in the **src/main/java/** directory, and then choosing

> **Run 'TestDriver.main()'**

Or subsequently by selecting **TestDriver** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Binomial Coefficient

The binomial cooefficient C(n,k), often written "n choose k", is the number of ways to pick a subset of k elements from a collection of n elements. It may be defined recursively as follows:

> C(n,0) = 1
>
> C(n,n) = 1
>
> C(n,k) = C(n-1,k) + C(n-1, k-1)

## Your Task

You will implement the **compute** method of the classes **NaiveRecursive** and **Memoization**.

As the names suggest, **NaiveRecursive** should be a literal recursive implementation of the binomial coefficient function, and **Memoization** should implement the binomial coefficient function using memoization to avoid repeatedly solving identical subproblems.

Because the binomial coefficient function takes two parameters, **n** and **k**, you will probably want your memoization table to be a two-dimensional array.

The test driver solves C(n,k) for all values of k 0..n, for n=25, and measures the number of milliseconds needed to solve each problem. While the naive recursive implementation will take an appreciable amount of time, the implementation using memoization should execute very quickly.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab23_Gradle</b>
CS201-Fall2021/CS201_Lab23_Gradle
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
         Assignment: lab23

######################################################################
</pre>
