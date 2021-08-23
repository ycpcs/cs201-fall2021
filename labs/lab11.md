---
layout: default
title: "Lab 11: Using Generic Containers and Algorithms"
---

## Getting Started

Download [CS201\_Lab11\_Gradle.zip](CS201_Lab11_Gradle.zip). Copy and extract the zip file into your **CS201-Fall2021** directory. Import it into your **CS201-Fall2021** IntelliJ project using

> **File&rarr;New&rarr;Module from Existing Sources...**

Select the **CS201\_Lab11\_Gradle** directory and in the **Import Module** dialog select **Import module from external model&rarr;Gradle** and click **Finish**.

You should see a project called **CS201\_Lab11\_Gradle** in the Project window.

To begin, run the program by right-clicking on the file **StartLab.java** in the **src/main/java/** directory, and then choosing

> **Run 'StartLab.main()'**

In the console window, type **yes** when prompted which should copy the source and test files from your [Lab 10](lab10.html).

In this lab, you will build upon the classes from [Lab 10](lab10.html).

**There is no executable application for this lab.** Instead, we will test the modified class implementations by running the unit tests by right-clicking on the file **CardTest.java** and **DeckTest.java** in the **src/test/java/** directory, and then choosing

> **Run 'CardTest (1)'**

(and similarly for **DeckTest**). Or subsequently by selecting **CardTest**, etc. from the dropdown list in the top right corner of the IDE and clicking the green arrow.

## Your Task

**(1)** Modify your **Card** class so that rather than implementing the **Comparable** interface, it implements **Comparable\<Card\>**: instead of

{% highlight java %}
public class Card implements Comparable {
{% endhighlight %}

use

{% highlight java %}
public class Card implements Comparable<Card> {
{% endhighlight %}

Change the type of the **compareTo** method's parameter from **Object** to **Card**. You can now take out the type cast you used to convert the **Object** reference into a **Card** reference.

Run your JUnit tests again to make sure everything still works correctly.

**(2)** Add an **equals** method to the **Card** class. Add JUnit tests to **CardTest** to make sure it works properly.

**(3)** Implement the **Deck** class. It should look like this:

{% highlight java %}
public class Deck {
    // fields

    public Deck() {
        // generate a full deck (52 cards)
    }

    public int getNumCards() {
        // return number of cards in the deck
    }

    public Card getCard(int i) {
        // return the i'th card in the deck
    }

    public Card drawCard() {
        // draw a Card from the top of the deck
        // and return a reference to it
    }

    public void shuffle() {
        // randomly shuffle the deck
        // use the Collections.shuffle() static method!
    }
}
{% endhighlight %}

Use an **ArrayList\<Card\>** (ArrayList of Cards) to store the cards.

The **get** method could use the **get** method of **ArrayList\<Card\>**.

The **drawCard** method could use the **remove(int)** method of **ArrayList\<Card\>**. (Use it to remove the last card in the list of cards, and return a reference to the removed card.)

Add a JUnit test class called **DeckTest**. It should contain tests for the **getNumCards**, **drawCard**, and **Shuffle** methods of the **Deck** class.

## Hints

You can iterate through all of the elements of an enumeration by calling the enumeration's **values** static method, which returns an array. For example, this code snippet should be useful in the **Deck** constructor:

{% highlight java %}
Suit[] allSuits = Suit.values();
Rank[] allRanks = Rank.values();

for (int j = 0; j < allSuits.length; j++) {
    for (int i = 0; i < allRanks.length; i++) {
        // use allSuits[j] and allRanks[i] to create a Card
    }
}
{% endhighlight %}

You can implement the **Deck** class's **shuffle** method by calling **Collections.shuffle**, passing the collection containing the **Deck** object's **Cards** as a parameter. In your JUnit test for **shuffle**, verify that at least some of the cards in the deck changed position.

## Submitting

When you are done, submit the lab to the Marmoset server using the Terminal window in IntelliJ (click **Terminal** at the bottom left of the IDE). Navigate to the directory using

<pre>
$ <b>cd CS201_Lab11_Gradle</b>
CS201-Fall2021/CS201_Lab11_Gradle
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
         Assignment: lab11

######################################################################
</pre>
