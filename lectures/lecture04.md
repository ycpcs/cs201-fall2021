---
layout: default
title: "Lecture 4: GUIs and MVC"
---

## GUIs

We will be doing several programming assignments involving the creation of simple GUIs. Here is a quick overview of how GUIs work in Java.

## Events

Programs which have a graphical user interface are *event-driven*. That means that the program does not "do anything" unless an event occurs. Example of events are things like

-   mouse clicks
-   moving the mouse
-   pressing a button

The program responds to events by establishing a *handler* for the event. An event handler is simply a method which is called whenever the event occurs. Handlers are specific to a particular window or GUI component. For example, if your program has multiple windows, then you will probably have one handler for each window.

## Frames and Panels

A *frame* is a top-level window. Generally, a frame is only used as a container for other GUI components. In Java, an instance of the **JFrame** class represents a frame.

A *panel* is a rectangular region of a window. Panels are often used as a container for components such as buttons, text boxes, etc. Another use for panels is as a surface for drawing graphics; this is the way we will usually be using panels in this course. In Java, an instance of the **JPanel** class represents a panel.

## paint() and repaint()

To use a **JPanel** instance for drawing graphics, you can do the following:

-   create your own class as a subclass of **JPanel**
-   define a method called **paint** in your subclass

The **paint** method will be called whenever the contents of your panel need to be redrawn. Note that drawing is event-driven; a call to the **paint** method is made automatically whenever a "window expose" event occurs, where a previously-hidden area of the panel becomes visible.

A **paint** method looks like this:

{% highlight java %}
public void paint(Graphics g) {
    ...
{% endhighlight %}

The parameter is a reference to an object whose type is **java.awt.Graphics**. A **Graphics** object has a large number of methods to perform drawing operations within whatever component is being drawn (e.g., the contents of your panel).

Example: drawing a solid blue rectangle:

{% highlight java %}
g.setColor(Color.BLUE);
g.fillRect(100, 75, 200, 100);
{% endhighlight %}

The rectangle drawn by the code above has its upper-left corner at position x=100, y=75, is 200 pixels wide, and 100 pixels high. Note that in Java graphics, y coordinates increase towards lower points on the screen (i.e., going down).

If, in response to an event, you would like to *force* your panel to be redrawn, simply call the **repaint** method. This method takes no arguments. **You should NEVER call the paint() method directly in an event driven system!**

## MVC architecture

Often times event driven systems will be designed using the **M**odel, **V**iew, **C**ontroller architecture (MVC). This architecture consists of three components that handle different aspects of the program:

-   **Model** - a set of state variables that store the current values of the system *independently* of how they are displayed. This typically will be a separate class with only fields, getters, and setters, i.e. no logic.
-   **View** - a rendering class that uses an *instance* of a model class to produce a visualization, e.g. GUI or console. The view should **NOT** modify the model.
-   **Controller** - a class that provides the connection between the view and the model usually through event handlers, i.e. when an event occurs, the controller decides if/how the model needs to be updated and then refreshes the view to display the updated state.

Many times in graphics applications that only have a single view, the view and controller classes are combined into a view-controller class that handles accepting UI events, updating the model accordingly, and then redrawing the graphics window.

Note that by maintaining a model *separate* from the view, we are not locked in to a *single* display format. Instead, we could create several alternative views that use the same model to display the information in different ways.

### A complete example

As a simple example program, we will implement a GUI application with a model that contains a single integer counter and a color index. Each time the mouse is clicked, the count increases. Mouse clicks also cause a rectangle displayed in the window to change color.

The comments in the example explain what the code is doing.

Here is the **CountModel** class:

{% highlight java %}
import java.awt.Color;

public class CountModel {
	// Fields for the system state
	private int count;
	private int colorIndex;

    // as the count increases, the rectangle will cycle through these colors
    public static final Color[] colors = { Color.RED, Color.GREEN, Color.BLUE };
	
	// Model constructor
	public CountModel() {
		count = 0;
		colorIndex = 0;
	}
	
	// Model getter methods
	public int getCount() {
		return count;
	}
	
	public int getColorIndex() {
		return colorIndex;
	}
	
	// Increment count method
	public void incrementCount() {
		count++;
	}
	
	// Increment color cyclically
	public void incrementColorIndex() {
		colorIndex = (colorIndex+1)%colors.length;
	}
}
{% endhighlight %}


Here is the **CountFrame** class:

{% highlight java %}
import javax.swing.JFrame;
import javax.swing.SwingUtilities;

public class CountFrame extends JFrame {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                CountFrame frame = new CountFrame();

                // embed a CountPanel in the frame
                frame.add(new CountPanel());

                // "packing" the frame causes it to adjust its size based
                // on the panel's preferred size
                frame.pack();

                // when the frame is closed, exit the program
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

                // making the frame visible starts the program
                frame.setVisible(true);
            }
        });
    }
}
{% endhighlight %}

There is no important behavior in the **CountFrame** class -it is simply a container for a **CountPanel**, which is where everything interesting will happen.

Here is the **CountPanel** class:

{% highlight java %}
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import javax.swing.JPanel;

public class CountPanel extends JPanel {
    // constants defining the preferred width and height of the panel
    private static final int WIDTH = 400;
    private static final int HEIGHT = 300;

    // this font will be used to display the count
    private static final Font font = new Font("Dialog", Font.BOLD, 48);

    // field storing the current model
    private CountModel countModel;

    // constructor
    public CountPanel() {
    	// Initialize model
        countModel = new CountModel();

        setBackground(Color.GRAY);

        setPreferredSize(new Dimension(WIDTH, HEIGHT));

        // install event handlers
        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                handleMouseClick(e);
            }
        });
    }

	// Controller methods (event handlers)
    private void handleMouseClick(MouseEvent e) {
        // change the "state" of the model on mouse click
        countModel.incrementCount();
        countModel.incrementColorIndex();

        // now that the state is changed,
        // redraw the panel to reflect the state change
        repaint();
    }

	// View methods (paint)
    @Override
    public void paint(Graphics g) {
        super.paint(g); // call the superclass's paint() method to paint the background

        // draw the rectangle
        g.setColor(countModel.colors[countModel.getColorIndex()]);
        g.fillRect(20, 20, WIDTH - 40, HEIGHT - 40);

        // draw the count
        g.setFont(font);
        g.setColor(Color.WHITE);
        g.drawString("" + countModel.getCount(), 50, 150);
    }
}
{% endhighlight %}

The most important thing to think about as you look at this code is the event-driven nature. The **count** field is the "state" of the program stored in the *model*. Mouse click events cause this state to change through the *controller* methods. When the state changes, the panel is redrawn to reflect the state change through the *view* methods.

Here is another example project using a Model/View/Controller architecture:

> [CS201_GUIMVCDemo.zip](CS201_GUIMVCDemo.zip)
