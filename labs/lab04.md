---
layout: default
title: "Lab 4: Drag and Drop GUI"
---

## Getting Started

Download [CS201\_Lab04\_Gradle.zip](CS201_Lab04_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab04\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab04\_Gradle** in the Project window.

Run the program by right-clicking on the file **CirclesFrame.java** in the **src/main/java/** directory, and then choosing

> **Run 'CirclesFrame.main()'**

Or subsequently by selecting **CirclesFrame** from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

Modify the program so that it allows the user to drag an outline of a circle around the screen with the mouse, place the circle when the left mouse button is clicked, and increasing its radius when the right button is clicked. You should also keep track of the number of circles that have been placed.

## Hints

-   A **Circle** class has been provided that defines a circle using its *center* coordinates and *radius*. Since this class has *no setters* it is *immutable*, i.e. once the object is created, it's fields cannot be changed. **DO NOT MODIFY THIS CLASS.**

-   Consider what information the model class should contain. You can use a **Circle** object for the placed circle.

-   The **CirclesPanel** class should contain a field for the model as well as fields for the outlined circle's center and radius. The initial radius can be set to **CirclesModel.START_R**.

-   Use the **handleMouseMove** controller method for when the mouse is being moved. This method should update the outline center fields with the current mouse position coordinates. You can get the coordinates of the mouse pointer using the **e** parameter to store into the **x** and **y** fields as follows:

{% highlight java %}
    x = e.getX();
    y = e.getY();
{% endhighlight %}

-   Use the **handleMouseClick** controller method for when a mouse button is clicked. This method should make a new circle (consider the **addCircle** model method) when the left button is clicked as well as increment the counter and reset the outline radius. When the right button is clicked it should increment the radius of the outline by **CirclesModel.START_R**. You can check to see which mouse button was clicked as follows:

{% highlight java %}

    if (e.getButton() == MouseEvent.BUTTON1) {
        // left button
        ...
    } else if (e.getButton() == MouseEvent.BUTTON3) {
        // right button
        ...
    }
{% endhighlight %}

-   After the event handlers update the model, call **repaint()** to refresh the view.

-   Use the **drawOval** and **fillOval** methods to draw the circles. Note that to draw a circle using these methods, the parameters are the *upper-left* corner of a bounding rectangle/square, and the width and height of the rectangle. Consider how the center and radius relate to the drawing parameters. **DO NOT MODIFY THE MODEL FIELDS**.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab04_Gradle</b>
CS201-Fall2021/CS201_Lab04_Gradle
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
         Assignment: lab04

######################################################################
</pre>
