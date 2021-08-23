---
layout: default
title: "Lab 9: Inheriting Fields and Methods"
---

## Getting Started

Download [CS201\_Lab09\_Gradle.zip](CS201_Lab09_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab09\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab09\_Gradle** in the Project window.

To begin, run the program by right-clicking on the file **StartLab.java** in the **src/main/java/** directory, and then choosing

> **Run 'StartLab.main()'**

In the console window, type **yes** when prompted which should copy the source and test files from your [Lab 8](lab08.html).

In this lab, you will build upon the classes from [Lab 8](lab08.html).

**There is no executable application for this lab.** Instead, we will test the modified class implementations by running the unit tests by right-clicking on the file **CarTest.java**, **BoatTest.java**, and **AirplaneTest.java** in the **src/test/java/** directory, and then choosing

> **Run 'CarTest (1)'**

(and similarly for **BoatTest** and **AirplaneTest**). Or subsequently by selecting **CarTest**, etc. from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Make the following modifications:

**(1)** Add a **maxSpeed** field, with type **double**, in the **Vehicle** class. Add a constructor to **Vehicle** that takes a single **double** parameter and uses its value to initialize the **maxSpeed** parameter.

**(2)** Add a **getMaxSpeed** accessor method to **Vehicle** to return the **Vehicle's** maximum speed.

**(3)** Add constructors to **Car**, **Boat**, and **Airplane** taking a single **double** parameter. Each constructor should call the superclass constructor, passing the parameter value as the argument.

**(4)** Add the following abstract method to the **Vehicle** class:

    public abstract double getSpeed(Terrain t);

This method returns the speed of the **Vehicle** over the given kind of terrain. You will need to implement this method in each subclass of **Vehicle**.

Here are the rules for different kinds of vehicles:

-   A **Car** moves at its maximum speed over **ROAD** terrain, and at one-quarter of its maximum speed over **AIRPORT** and **MARINA** terrain.

-   A **Boat** moves at its maximum speed over **WATER**, and at one-quarter of its maximum speed over **MARINA**.

-   An **Airplane** moves at its maximum speed over all kinds of terrain.

If the **getSpeed** method is called with a terrain type that is not legal for a particular kind of **Vehicle**, you can throw an **IllegalArgumentException**:

    throw new IllegalArgumentException("Illegal terrain: " + t);

**(5)** Your JUnit test classes will no longer compile because they assume that **Car**, **Boat**, and **Airplane** objects can be created without passing any arguments to the constructor. Change these tests so that:

-   The **Car** object has a maximum speed of 100.
-   The **Boat** object has a maximum speed of 50.
-   The **Airplane** object has a maximum speed of 500.

Re-run all of the tests to make sure they still pass.

**(6)** Add the following method to the **Trip** class:

{% highlight java %}
public double findAverageSpeed(Vehicle v) {
    ...
{% endhighlight %}

This method determines the average speed of a given **Vehicle** traversing the sequence of terrain represented by the **Trip** object on which the method is called, assuming that the vehicle always moves at its maximum speed. It should compute the total time required for the trip. Let's say that the trip is composed of terrain types

> *t*<sub>0</sub>, *t*<sub>1</sub>, *t*<sub>2</sub>, ..., *t*<sub>n-1</sub>

The max speed of a vehicle over terrain value *t* is

> speed(*t*)

which is what is returned by calling the **getSpeed** method on the vehicle object and passing the terrain value *t*.

The total amount of time *T* required for the trip is

> *T* = (1 / speed(*t*<sub>0</sub>)) + (1 / speed(*t*<sub>1</sub>)) + (1 / speed(*t*<sub>2</sub>)) + ... + (1 / speed(*t*<sub>n-1</sub>))

Then, the average speed for the trip is

> *n* / *T*

**(7)**. Add JUnit tests to **CarTest**, **BoatTest**, and **AirplaneTest** to test the **getSpeed** and **findAverageSpeed** methods.

For example:

{% highlight java %}
// in CarTest

private static final double DELTA = 0.00001;

private Trip exampleTrip;
private Car myCar;

public void setUp() {
  exampleTrip = new Trip(3);
  exampleTrip.setHop(0, Terrain.AIRPORT);
  exampleTrip.setHop(1, Terrain.ROAD);
  exampleTrip.setHop(2, Terrain.MARINA);

  myCar = new Car(100.0); // the Car's maximum speed is 100
}

public void testGetSpeed() {
  // full speed over road
  assertEquals( 100.0, myCar.getSpeed(Terrain.ROAD), DELTA );

  // one-quarter speed through an airport
  assertEquals( 0.25 * 100.0, myCar.getSpeed(Terrain.AIRPORT), DELTA );

  // one-quarter speed through a marina
  assertEquals( 0.25 * 100.0, myCar.getSpeed(Terrain.MARINA), DELTA );
}

public void testFindAverageSpeed() throws Exception {
  double dist = 3.0;
  double time = (1.0/(.25 * 100.0)) + (1.0 / 100.0) + (1.0 / (.25 * 100.0));
  assertEquals( dist /  time, exampleTrip.findAverageSpeed(myCar), DELTA);
}
{% endhighlight %}

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab09_Gradle</b>
CS201-Fall2021/CS201_Lab09_Gradle
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
         Assignment: lab09

######################################################################
</pre>
