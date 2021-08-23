---
layout: default
title: "Lab 19: Palindromes"
---

## Getting Started

Download [CS201\_Lab19\_Gradle.zip](CS201_Lab19_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab19\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab19\_Gradle** in the Project window.

Run the program by right-clicking on the file **CheckPalindrome.java** in the **src/main/java/** directory, and then choosing

> **Run 'CheckPalindrome.main()'**

Or subsequently by selecting **CheckPalindrome** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

A phrase is a palindrome when the sequence of the letters in the phrase is the same both forwards an backwards, ignoring space and punctuation. Some examples:

> Rise to vote, sir
>
> Able was I ere I saw Elba
>
> A man, a plan, a canal - Panama!
>
> A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal - Panama?
>
> A Danish custard? Drat such sin, Ada!

Your task is to write a program which uses a stack to determine whether or not a phrase is a palindrome. A starting point is provided in the **CheckPalindrome** class, whose **main** method reads lines of input from **System.in**. You should modify the loop so that after each line of input is read, it checks the line to see if it is a palindrome, and then prints either "Palindrome" or "Not a palindrome" to **System.out**.

Use two collections: a stack of **Character** values and a queue of **Character** values:

{% highlight java %}
Stack<Character> stack = new Stack<Character>();
Queue<Character> queue = new LinkedList<Character>();
{% endhighlight %}

Note that the **Character** type is essentially equivalent to **char**, but because it is a class, **Character** values can be stored in collections such as **Stack**s. The Java compiler will automatically convert between **char** and **Character** values.

You will need to think about how the stack and queue can help you determine whether or not the input is a palindrome.

Here is an example run (user input in **bold**):

<pre>
<b>A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal - Panama?</b>
Palindrome
<b>Rise to vote, sir</b>
Palindrome
<b>Boy howdy!</b>
Not a palindrome
<b>quit</b>
<i>program exits</i>
</pre>

## Hints

You will need to treat a String object as a sequence of characters. You can use the **length** and **charAt** methods to get the length of a string and the value of a single character of the string, respectively. For example, here is how to iterate over all of the characters in a **String**:

{% highlight java %}
String line = ...
for (int i = 0; i < line.length(); i++) {
    char c = line.charAt(i);

    // Do something with c
}
{% endhighlight %}

Your program should ignore all characters other than letters. You can find out whether or not a character is a letter using the **Character.isLetter** method:

{% highlight java %}
char c = ...

if (Character.isLetter(c)) {
    // c is a letter
}
{% endhighlight %}

You should also ignore case. One way to do this is by converting all letters to lower-case:

{% highlight java %}
c = Character.toLowerCase(c);
{% endhighlight %}

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab19_Gradle</b>
CS201-Fall2021/CS201_Lab19_Gradle
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
         Assignment: lab19

######################################################################
</pre>
