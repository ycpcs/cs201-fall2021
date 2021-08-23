---
layout: default
title: "Lab 2: Coins class"
---

For this lab you will implement a class that represents a pocketful of change.

## Getting Started

Download [CS201\_Lab02\_Gradle.zip](CS201_Lab02_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab02\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab02\_Gradle** in the Project window.

**There is no executable application for this lab.** Instead, we will test the class implementation by running the unit tests by right-clicking on the file **CoinsTest.java** in the **src/test/java/** directory, and then choosing

> **Run 'CoinsTest'**

Or subsequently by selecting **CoinsTest** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your task

Implement the class called **Coins**, which is in the file called **Coins.java**. This file can be found by expanding the **CS201\_Lab02\_Gradle** project, then the **src/main/java/** folder. Double click on the file to open it in an editor window.

**Add comments indicating each component, i.e. field, constructor, getter, etc., that you add to the class.**

Add fields (member variables) for each coin type listed below - consider which datatype is appropriate and be sure to make them **private**:

> pennies, nickels, dimes, and quarters

The class should provide the following **public** methods:

1.  A 4-parameter constructor that takes the numbers of pennies, nickels, dimes, and quarters (in that order), and initializes the respective fields.

2.  Getter methods for all four denominations named **getPennies**, **getNickels**, **getDimes**, and **getQuarters**.

3.  **findCentsValue** calculates and returns the total value of the coins in cents, as an integer.

4.  **findDollars** calculates and returns the value in dollars, as an integer. Any fractional part of a dollar should be discarded: for example, if the coins total 137¢, i.e. $1.37, then this method should return the value 1. **Hint:** Consider using the **findCentsValue** method to get the total value in cents with integer division (**/**) to obtain the *quotient*

5.  **findChange** calculates and returns the value of the leftover change (after the dollars are removed) as an integer. For example, if the coins total $1.37, then this method should return the value 37. **Hint:** Consider using the **findCentsValue** method to get the total value in cents with integer modulo (**%**) to obtain the *remainder*

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab02_Gradle</b>
CS201-Fall2021/CS202_Lab01_Gradle
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
         Assignment: lab02

######################################################################
</pre>
