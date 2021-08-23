---
layout: default
title: "Lab 20: Word Count"
---

## Getting Started

Download [CS201\_Lab20\_Gradle.zip](CS201_Lab20_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab20\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab20\_Gradle** in the Project window.

Run the program by right-clicking on the file **WordCount.java** in the **src/main/java/** directory, and then choosing

> **Run 'WordCount.main()'**

Or subsequently by selecting **WordCount** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Complete the program so that it counts the number of occurrences of words in the text file whose name is entered by the user, and then prints out a histogram showing the number of occurrences of each word (in lower case), listing the words alphabetically.

Code is provided which

-   opens the file
-   reads each line of the file
-   extracts each word (sequence of letters) from the lines of the file, converting each word to lower case

An example text file, **gettysburg.txt**, is provided for you to use when testing your program.

Here is partial output from running the program on this file (user input in **bold**):

<pre>
Read which file? <b>gettysburg.txt</b>
Word counts:
a          : =======
above      : =
add        : =
advanced   : =
ago        : =
all        : =
altogether : =
and        : ======
any        : =
are        : ===
as         : =
battle     : =
</pre>

The length of the "bar" following each word indicates the number of occurrences of that word. For example, the word "and" occurred 6 times, so there are six "=" characters making up the bar for that word.

There are 126 more lines of output.

## Hints

Use a map with key type **String** and value type **Integer** to count the number of occurrences of each word.

You are required to list the words alphabetically when displaying the histogram. Can you choose a built-in implementation of the **Map** interface that will make this job easier?

You should determine the length of the longest word so that the "bars" of the histogram will all start in the same column when printed.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab20_Gradle</b>
CS201-Fall2021/CS201_Lab20_Gradle
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
         Assignment: lab20

######################################################################
</pre>
