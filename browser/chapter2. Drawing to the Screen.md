A web browser doesn’t just download a web page; it also has to show that page to the user.

## Creating windows

Though the desktop environment is responsible for displaying the window, the program is responsible for drawing its contents.
Graphical applications such as browsers typically aim to redraw at a speed equal to the refresh rate, or frame rate, of the screen, and/or a fixed 60HzMost screens today have a refresh rate of 60Hz, and that is generally considered fast enough to look smooth. However, new hardware is increasingly appearing with higher refresh rates, such as 120Hz. Sometimes rendering engines, games in particular, refresh at lower rates on purpose if they know the rendering speed can’t keep up.

Doing all of this by hand is a bit of a drag, so programs usually use a graphical toolkit to simplify these steps. These toolkits allow you to describe your program’s window in terms of widgets like buttons, tabs, or text boxes, and take care of drawing and redrawing the window contents to match that description.

```python

while True:
    for evt in pendingEvents():
        handleEvent(evt)
    drawScreen()

```

Here, drawScreen draws the various widgets, pendingEvent asks the desktop environment for recent mouse clicks or key presses, and handleEvent calls into library user code in response to that event. This event loop pattern is common in many applications, from web browsers to video games.

## Drawing to the window

```python

WIDTH, HEIGHT = 800, 600
window = tkinter.Tk()
canvas = tkinter.Canvas(window, width=WIDTH, height=HEIGHT)
canvas.pack()

```

The first line creates the window, as above; the second creates the Canvas inside that window. We pass the window as an argument, so that Tk knows where to display the canvas, and some arguments that define the canvas’s size; I chose 800×600 because that was a common old-timey monitor size.This size, called Super Video Graphics Array, was standardized in 1987, and probably did seem super back then. The third line is a Tk peculiarity, which positions the canvas inside the window.

