---
layout: default
title: "Lab 13: Benchmarking ArrayList"
---

## Getting Started

Download [CS201\_Lab13\_Gradle.zip](CS201_Lab13_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab13\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab13\_Gradle** in the Project window.

Run the program by right-clicking on the file **Benchmark.java** in the **src/main/java/** directory, and then choosing

> **Run 'Benchmark.main()'**

Or subsequently by selecting **Benchmark** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Your task is to benchmark removing all elements from an **ArrayList** using two techniques:

1.  Repeatedly remove the last element
2.  Repeatedly remove the first element

**Start by stating a hypothesis.** How will the running time of each of these techniques increase as the number of elements in the array list increases?

Open the file **hypothesis.txt** in the project and write down your hypothesis. Be specific about *how* the running time of each algorithm will increase as the number of elements increases.

**Test your hypothesis.** Test both of these techniques on a series of **ArrayLists** containing increasing numbers of elements. Start at 10,000 elements, and increase by 10,000 elements up to 100,000 elements.

**State your conclusion.** After you have tested your hypothesis experimentally (as described below), edit **hypothesis.txt** to state your results. If your experimental results did not match your hypothesis, explain why.

## Experiment

You can use the following method to create **ArrayList** objects with a specified number of elements:

{% highlight java %}
public static ArrayList<Integer> create(int count) {
    ArrayList<Integer> a = new ArrayList<Integer>(count);
    for (int i = 0; i < count; i++) {
        a.add((Integer) 42);
    }
    return a;
}
{% endhighlight %}

You can measure the number of milliseconds required to execute a block of code as follows:

{% highlight java %}
// force a garbage collection
System.gc();

long start = System.currentTimeMillis();

// ...code that you want to benchmark...

long end = System.currentTimeMillis();

long elapsed = end - start;
{% endhighlight %}

**Important**: run your benchmark on the **ArrayList** class included in the lab, *not* the built-in **java.util.ArrayList** class.

## Output and Analysis

The output of the program should be a series of lines of comma-separated values:

-   The first value is the number of elements in the ArrayList
-   The second value is the number of milliseconds required to remove all elements by repeatedly removing the last element
-   The third value is the number of milliseconds required to remove all elements by repeatedly removing the first element

Your output should look something like this:

<pre>
10000,<i>xxx</i>,<i>yyy</i>
20000,<i>xxx</i>,<i>yyy</i>
30000,<i>xxx</i>,<i>yyy</i>
40000,<i>xxx</i>,<i>yyy</i>
50000,<i>xxx</i>,<i>yyy</i>
60000,<i>xxx</i>,<i>yyy</i>
70000,<i>xxx</i>,<i>yyy</i>
80000,<i>xxx</i>,<i>yyy</i>
90000,<i>xxx</i>,<i>yyy</i>
100000,<i>xxx</i>,<i>yyy</i>
</pre>

*xxx* and *yyy* are the number of milleseconds to remove all of the elements for each of the two techniques.

Once you have collected your benchmark data, import it into Excel (you should be able to simply select the output of your program, copy it to the clipboard, and paste it into Excel). Plot the data (second and third columns), using the first column as the X-axis.

Copy your Excel file into the Eclipse project. (Put it in the subdirectory of your Eclipse workspace called **CS201\_Lab13\_Gradle**, and in Eclipse right-click on the project and choose **Refresh**.)

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab13_Gradle</b>
CS201-Fall2021/CS201_Lab13_Gradle
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
         Assignment: lab13

######################################################################
</pre>
