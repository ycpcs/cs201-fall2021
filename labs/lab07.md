---
layout: default
title: "Lab 7: Exceptions"
---

## Getting Started

Download [CS201\_Lab07\_Gradle.zip](CS201_Lab07_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab07\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab07\_Gradle** in the Project window.

Run the program by right-clicking on the file **ReadFile.java** in the **src/main/java/** directory, and then choosing

> **Run 'ReadFile.main()'**

Or subsequently by selecting **ReadFile** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your task

You will make changes to the class called **ReadFile**.

Complete the progam so that it prints the contents of the file specified by the user (code is provided for user input) to **System.out**.

There are several important requirements:

-   The **main** method must not be declared to throw any kind of exception.
-   The program must not test whether or not the requested file exists before attempting to open it.
-   The program must use a **try/finally** block to make sure that the reader or input stream reading the file is closed before the program exits.

There is a file **myFile.txt** provided that contains the following contents:

    Oh freddled gruntbuggly
    Thy micturations are to me
    As plurdled gabbleblotchits on a lurgid bee.
    Groop I implore thee, my foonting turlingdromes
    And hooptiously drangle me with crinkly bindlewurdles,
    Or I will rend thee in the gobberwarts with my blurglecruncheon,
    See if I don't!

Here is an example session showing a file being printed successfully (user input in **bold**):

<pre>
Which file? <b>myFile.txt</b>
Oh freddled gruntbuggly
Thy micturations are to me
As plurdled gabbleblotchits on a lurgid bee.
Groop I implore thee, my foonting turlingdromes
And hooptiously drangle me with crinkly bindlewurdles,
Or I will rend thee in the gobberwarts with my blurglecruncheon,
See if I don't!
</pre>

Here is another example session showing what happens when the user enters the name of a nonexistent file:

<pre>
Which file? <b>nonexistent.txt</b>
Error: nonexistent.txt (No such file or directory)
</pre>

## Hints

Use a **try/catch** block to handle an **IOException** or **FileNotFoundException** that might occur. Print the error message from the catch block. You can call the **getMessage** method on the caught exception object to get a string containing a textual description of the error that caused the exception.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab07_Gradle</b>
CS201-Fall2021/CS201_Lab07_Gradle
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
         Assignment: lab07

######################################################################
</pre>
