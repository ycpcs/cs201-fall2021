---
layout: default
title: "Lab 5: Testing Overloaded Constructors"
---

## Getting Started

Download [CS201\_Lab05\_Gradle.zip](CS201_Lab05_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab05\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab05\_Gradle** in the Project window.

To begin, run the program by right-clicking on the file **StartLab.java** in the **src/main/java/** directory, and then choosing

> **Run 'StartLab.main()'**

In the console window, type **yes** when prompted which should copy the **Coins.java** and **CoinsTest.java** files from your [Lab 2](lab02.html).

In this lab, you will build upon the classes from [Lab 2](lab02.html) to add several overloaded constructors along with corresponding unit tests.

**There is no executable application for this lab.** Instead, we will test the class implementation by running the unit tests by right-clicking on the file **CoinsTest.java** in the **src/test/java/** directory, and then choosing

> **Run 'CoinsTest (1)'**

Or subsequently by selecting **CoinsTest** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Make the following modifications to the **Coins** class:

**(1)** Add a *default* constructor that takes **no** parameters and initializes all the fields to 0 *except* for 1 penny.

**(2)** Add a single parameter constructor that takes a **double** as a total starting amount *in dollars* and calculates the number of each denomination of coin. To accomplish this, you will need to convert the parameter to an *integer* number of cents and then repeatedly use integer division starting with the largest denomination (quarters) to determine the maximum number of each denomination this amount contains. Be sure to remove the amount of each denomination from the total before calculating the number of coins in the next smaller denomination.

**(3)** Add a single parameter constructor that takes a **Coins** object and initializes the fields to the same values as the parameter object. **Note:** This is essentially making a *copy* of the parameter object. It is good practice to use the getter methods for the parameter object, however since the object is in the *same* class, the fields can actually be accessed directly.

**(4)** Add an **equals** method that takes a **Coins** object as a parameter and returns a **boolean**. The method should return **true** if all the fields of the class are equal to those of the parameter, and **false** otherwise.

Make the following modifications to the **CoinsTest** class:

**(1)** Add several additional test **Coins** references.

**(2)** In the **setUp** method, instantiate *at least* one new **Coins** object using each of the new constructors.

**(3)** Add assert tests in the various getter test methods to check for proper initialization of the fields in the new test objects. **Note:** For the object instantiated using the **Coins** object parameter, use an **assertTrue** test that checks **both** that the *field* values are equal **and** the references for the new object and the one passed to the constructor are **different**.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab05_Gradle</b>
CS201-Fall2021/CS201_Lab05_Gradle
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
         Assignment: lab05

######################################################################
</pre>
