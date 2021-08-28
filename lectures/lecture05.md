---
layout: default
title: "Lecture 5: Overloading, JUnit"
---

<!--
Note: see the [course notes on arrays](../notes/javaArrays.html) for more detailed information about arrays in Java.
-->

## Overloading

Unlike in C, Java allows for methods to be *overloaded*, i.e. two methods can have the same name. The requirement for overloaded messages is that they **must have different parameter lists**, i.e. either a different number of parameters or parameters of different types. Overloading provides flexibility when creating classes that have similar behaviors but with different types of data.

One common method that is often overloaded is *constructors*. By having multiple constructors, users can create objects in a variety of ways. For example, using the **Dog** class from [Lecture 2](lecture02.html), we can add a second constructor method that takes *no* parameters (often referred to as the *default constructor*)

{% highlight java %}
/**
 * A simple Java class representing a Dog.
 */
public class Dog {
    private String name;
    private boolean goodDog;

    //
    // Default constructor that takes no parameters
    //
    public Dog() {
        this.name = "Fido";
        this.goodDog = false;
    }

    // Constructor for Dog objects - should initialize fields
    public Dog(String name, boolean goodDog) {
        this.name = name;
        this.goodDog = goodDog;
    }

    //
    public boolean isGoodDog() {
        return goodDog;
    }

    public void giveNewName(String newName) {
        name = newName;
    }

    public void bark() {
        System.out.println(name + " barks");
    }

    public void respondToCall(String nameCalled) {
        // Good dogs come when their name is called
        if (name.equals(nameCalled) && goodDog) {
            System.out.println(name + " comes");
        } else {
            System.out.println(name + " does not respond");
        }
    }

    public void train() {
        goodDog = true;
    }
}
{% endhighlight %}

Then we can create two Dog objects using the different constructors

{% highlight java %}
Dog lassie = new Dog("Lassie", true);
Dog stray = new Dog();

lassie.respondToCall("Lassie"); // "Lassie comes"
stray.respondToCall("Lassie");  // "Fido does not respond" (wrong name)
stray.respondToCall("Fido");    // "Fido does not respond" (not trained)
{% endhighlight %}

## JUnit

Classes are the "parts" of an object-oriented program.

Testing makes sure that the parts work correctly. If the individual classes don't work correctly, the overall program is probably not going to work correctly. Therefore, it is very important to have a good set of tests for the classes in your program. 

Rather than continually running a program (which requires creating an application, instantiating an object(s), and manually checking inputs/outputs), instead we can *automate* testing using Java's **JUint** testing framework.

[JUnit](http://junit.org/) is a *unit testing* framework for Java programs. To use JUnit, you write *test classes*. A test class is designed to test one Java class. It contains one or more *test methods*. Each test method is designed to test one particular feature of the class being tested. Often it is preferred to write the tests *before* (or *separate from*) the class as defined by the class *specification*.

General structure of a JUnit test class
=======================================

The test class's fields (member variables) store references to objects (generally, instances of the class being tested). These fields and the objects they point to are called the *test fixture*.

A test class's **setUp** method creates the test fixture objects. This method is called automatically before each test method is called to ensure that the tests are run against fresh objects. It must be marked with the **@Before** annotation.

The test methods call methods on the test fixture objects and check to see that the methods compute the correct result, typically by calling an *assertion method*. Assertion methods are methods defined by the JUnit framework specifically for checking that calls to methods in classes being tested compute the expected result. Each test method must be marked with the **@Test** annotation.

Ideally, a test method should focus on one particular method to be tested.

Kinds of JUnit assertion methods:

{% highlight java %}
assertEquals(expected, actual); // assert that two values (expected and actual) are equal to each other

assertTrue(value); // assert that a boolean value (condition) is true

assertFalse(value); // assert that a boolean value (condition) is false
{% endhighlight %}

Most assertions in JUnit test classes will boil down to checking that the return value of a method call is equal to an expected value.

If an assertion is not satisifed, it causes the test method containing the assertion to fail. If all assertions in a test method are satisifed, the test method containing the assertion passes. The goal of testing using JUnit is that all assertions in all test methods should pass.

Eclipse has built-in support for running JUnit tests. To run a JUnit test class within eclipse, right-click on the test class, and choose **Run As...&rarr;JUnit test**. The result will be displayed in the JUnit window:

-   Green bar: all of the test methods passed
-   Red bar: at least one of the test methods failed

<div class="callout">
<b>Caution</b>: Simply passing all unit tests DOES NOT mean the class is CORRECT, only that it produces correct output for the <i>specific</i> input values. However, the more extensive the unit tests are, the more confidence there is in the correctness of the tested methods. It is good practice to write unit tests for <i>boundary</i>, i.e. unexpected, cases as well as invalid inputs.
</div>

JUnit Example
=============

As an example, let's consider a **Point** class defined as:

{% highlight java %}
public class Point {
  // Fields
  private int x;
  private int y;

  // Constructor
  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  // Getters
  public int getX() {
    return x;
  }

  public int getY() {
    return y;
  }

  // Setters
  public void setX(int x) {
    this.x = x;
  }

  public void setY(int y) {
    this.y = y;
  }

  // Instance print method
  public void print() {
    System.out.println("x=" + x + ", y=" + y);
  }
}
{% endhighlight %}

Here's a very simple JUnit class for testing the **Point** class. We'll call the test class **PointTest**.

{% highlight java %}
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

public class PointTest {
  // Create test object references
  private Point p;
  private Point q;

  @Before
  public void setUp() throws Exception {
    // Instantiate test objects
    p = new Point(4, 5);
    q = new Point(13, 14);
  }

  // Test class methods
  @Test
  public void testGetX() throws Exception {
    assertEquals(4, p.getX());
    assertEquals(13, q.getX());
  }

  @Test
  public void testGetY() throws Exception {
    assertEquals(5, p.getY());
    assertEquals(14, q.getY());
  }

  @Test
  public void testSetX() throws Exception {
    p.setX(55);
    assertEquals(55, p.getX());

    q.setX(101);
    assertEquals(101, q.getX());
  }

  @Test
  public void testSetY() throws Exception {
    p.setY(1331);
    assertEquals(1331, p.getY());

    q.setY(90125);
    assertEquals(90125, q.getY());
  }
}
{% endhighlight %}

This is a very simple example, but it demonstrates the basic idea: for each method in the **Point** class, we want to have one or more test methods which check whether or not the method behaves correctly using some test input. Note that since the setter method does not return a value, we must use the getter method in the unit test, thus there is a dependency so we will want to *ensure* there are unit tests for the getter methods.

Note that there is one method in **Point** that we didn't test - the **print** method. It is actually quite difficult to test methods that write output to **System.out**.

Summary
=======

-   *overloading* allows for multiple methods to have the same *name* but different *parameter lists*
-   *JUnit* allows you to test a class by using *assertions* to check that calling methods on objects belonging to that class work correctly
