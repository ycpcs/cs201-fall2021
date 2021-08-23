---
layout: default
title: "Lab 8: Inheritance and Polymorphism"
---

## Getting Started

Download [CS201\_Lab08\_Gradle.zip](CS201_Lab08_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab08\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab08\_Gradle** in the Project window.

**There is no executable application for this lab.** Instead, we will test the class implementations by running the unit tests by right-clicking on the files **CarTest.java**, **BoatTest.java**, and **AirplaneTest.java** in the **src/test/java/** directory, and then choosing

> **Run 'CarTest'**

(and similarly for **BoatTest** and **AirplaneTest**). Or subsequently by selecting **CarTest**, etc. from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Add classes called **Boat** and **Airplane**. They should have the following behavior:

-   A legal trip for a **Boat** must start and end at a marina, and must not contain any hops over terrain other than water or marina.

-   A legal trip for an **Airplane** must start and end at an airport, but may continue through any kind of terrain.

Add new JUnit test classes called **BoatTest** and **AirplaneTest** that test **Boat** and **Airplane** objects (respectively) against both legal and illegal trips.

You can use the provided **Car** and **CarTest** classes as a guide.

## Testing

In **src/test/java/(default package)** right-click on the appropriate test class and choose **Run As...&rarr;JUnit Test**. This will run the JUnit tests for the corresponding class. If you have correctly implemented the class, you will see a green bar, indicating that all tests have succeeded.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab08_Gradle</b>
CS201-Fall2021/CS201_Lab08_Gradle
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
         Assignment: lab08

######################################################################
</pre>
