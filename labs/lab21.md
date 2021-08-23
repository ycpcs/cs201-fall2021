---
layout: default
title: "Lab 21: Recursion"
---

## Getting Started

Download [CS201\_Lab21\_Gradle.zip](CS201_Lab21_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab21\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab21\_Gradle** in the Project window.

**There is no executable application for this lab.** Instead, we will test the class implementation by running the unit tests by right-clicking on the file **RecursionTest.java** in the **src/test/java/** directory, and then choosing

> **Run 'RecursionTest'**

Or subsequently by selecting **RecursionTest** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Implement each static method in the class called **Recursion**. Each method has comments describing what it should do.

When you implement a method, remove the line of code reading

{% highlight java %}
throw new UnsupportedOperationException("Not implemented yet");
{% endhighlight %}

A JUnit test class called **RecursionTest** contains test cases for each method.

You must use recursion in each method. **Do not use a loop in any of the methods.**

As you think about how to implement each method, consider:

-   What is a base case (or base cases) that can be solved without using recursion?
-   How can you find a subproblem which has the same form as the overall problem?
-   How can you extend the solution to the subproblem to solve the overall problem?

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab21_Gradle</b>
CS201-Fall2021/CS201_Lab21_Gradle
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
         Assignment: lab21

######################################################################
</pre>
