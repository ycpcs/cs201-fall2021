---
layout: default
title: "Lab 1: Dog Years"
---

## Getting Started

Download [CS201\_Lab01\_Gradle.zip](CS201_Lab01_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab01\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab01\_Gradle** in the Project window.

Run the program by right-clicking on the file **DogYears.java** in the **src/main/java/** directory, and then choosing

> **Run 'DogYears.main()'**

Or subsequently by selecting **DogYears** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Write a Java program that will prompt the user for their name and age, and translate their age from years to dog years. (1 year equals 7 dog years.)

Example session (user input in **bold**):

<pre>
What is your name? <b>Dave</b>
How old are you, Dave? <b>41</b>
Dave, in dog years you are 287 years old
</pre>

## Hints

Use a **java.util.Scanner** object to read from the keyboard.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab01_Gradle</b>
CS201-Fall2021/CS201_Lab01_Gradle
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
         Assignment: lab01

######################################################################
</pre>
