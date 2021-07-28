---
layout: default
title: "Lecture 9: Inheritance (continued)"
---

Note: The [course notes on objects, arrays, and references](../notes/objectsArraysReferences.html) will be useful.

[Here](images/CS201_lecture7_inheritance.pdf) is the sample code with explanatory annotations.

## Inheritance of fields and methods

When a superclass defines a field or non-private method, it is *inherited* by all subclasses.

So,

-   when a superclass defines a field, the field exists in all subclass objects
-   when a superclass defines a non-private method, it may be called on an instance of any subclass

## Access modifiers

We can specify *access modifiers* on fields and methods to restrict how they may be accessed. Java supports four access modifiers:

-   **public**: any class may access the field or method
-   **private**: only the class containing the field or method may access it
-   **protected**: like private, but subclasses may also access the field or method
-   "package-protected": if you do not explicitly specify an access modifier, it is *package-protected*. All classes in the same package may access the field or method. Curiously, subclasses may access a *package-protected* field or method, even if they are in a different package.

Even though Java supports four access modifiers, most of the time you will only use **public** and **private**.

Some rules of thumb:

-   All instance fields should be **private**.
-   All methods that are part of a class's "public interface" -the methods that perform the essential operations on instances of the class - should be **public**
-   All methods that are not part of the class's public interface should be **private**

One interesting consequence of these rules is that subclasses will not be allowed to directly access instance fields defined in the superclass. This is actually a good thing: it allows you to freely modify the fields in the superclass without affecting the subclasses in any way. (This is why **protected** fields are a bad idea - they make subclasses too sensitive to changes in the superclass.)

## Defining Concrete Fields and Methods in a Superclass

Sometimes it can be useful to define concrete (non-abstract) fields and methods in superclasses.

You should do this **only** when the field and/or methods represent properties that are truly common to all subclasses.

Example:

{% highlight java %}
public abstract class Vehicle {
    private double maxSpeed;

    public Vehicle(double maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public double getMaxSpeed() {
        return maxSpeed;
    }

    public abstract boolean startTrip(Terrain t);
    public abstract boolean endTrip(Terrain t);
    public abstract boolean move(Terrain t);
}
{% endhighlight %}

Now all classes that inherit from the **Vehicle** superclass will have a **double** field called **maxSpeed**, and an instance method called **getMaxSpeed** which returns the value of that field.

Note that the **Vehicle** class is still abstract because it has abstract methods.

### Invoking a superclass constructor from a subclass

When a superclass has instance fields, these fields exist in all instances of subclasses. So, constructors for subclasses will need a way to initialize these fields.

However, because instance fields are typically private, subclasses cannot access them directly. For example, here is a **Car** class that does not compile:

{% highlight java %}
public class Car extends Vehicle {
    public Car(double maxSpeed) {
        // this doesn't work because the
        // the maxSpeed field is private
        // in the Vehicle class
        this.maxSpeed = maxSpeed;
    }

    // ...definitions of startTrip, endTrip, and move methods...
}
{% endhighlight %}

The solution to this problem is for the **Car** class's constructor to call the **Vehicle** class's constructor. This is done using the **super** keyword. The call to the superclass's constructor must be the first line of code in the subclass's constructor:

{% highlight java %}
public class Car extends Vehicle {
    public Car(double maxSpeed) {
        // call superclass (Vehicle) constructor
        super(maxSpeed);
    }

    // ...definitions of startTrip, endTrip, and move methods...
}
{% endhighlight %}
