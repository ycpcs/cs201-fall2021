---
layout: default
title: "Lab 18: Parallel Estimation of π"
---

Getting Started
===============

## Getting Started

Download [CS201\_Lab18\_Gradle.zip](CS201_Lab18_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab18\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab18\_Gradle** in the Project window.

Run the program by right-clicking on the file **EstimatePi.java** in the **src/main/java/** directory, and then choosing

> **Run 'EstimatePi.main()'**

Or subsequently by selecting **EstimatePi** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Estimating π

An approximation of π can be computed by generating random points in a square of some arbitrary size centered at the origin of the x/y plane. Each time one of the random points falls within a circle centered at the origin (where the circle completely fills the square), increase a counter. After some number of random points have been generated, divide the counter (how many random points were within the circle) by the total number of random points. This number will approximate the area of a circle of radius 0.5. We know that for a circle, the area *a* is computed by the equation

> *a* = π*r*<sup>2</sup>

Letting *r* equal 0.5, and re-arranging to solve for π,

> π = *a* / .25

For example, here is a picture showing 5000 random points within a 200 by 200 square centered at the origin, along with an outline of a circle within the square:

> ![image](images/lab18/computePi.png)

Based on these 5000 points, we estimate π to be 3.0936. This is obviously not very accurate: computing more random points would lead to a more accurate estimate.

## Your Task

Your task is to use the technique described above to estimate π using 100,000,000 (one hundred million) random points.

Your program should support two computation techniques:

-   purely sequential computation (using a single thread)
-   parallel computation using 2 threads

Your program should measure the number of milliseconds needed to estimate π using both techniques. Is the parallel version faster? If so, how much faster?

## Hints

Create instances of the **PiTask** class to perform the computation (or part of the computation in the parallel version). You will need to implement the **run** method of this class so that generates random points and counts how many fall within the circle.

In the sequential computation, create one **PiTask** object and have it compute all 100,000,000 random points.

In the parallel computation, create two **PiTask** objects and have each compute 50,000,000 points. The total number of points that fell within the circle will thus be the sum of the counts computed by each of the two tasks.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab18_Gradle</b>
CS201-Fall2021/CS201_Lab18_Gradle
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
         Assignment: lab18

######################################################################
</pre>
