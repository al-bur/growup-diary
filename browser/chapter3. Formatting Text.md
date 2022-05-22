# Formatting Text

## What is a font?

The boxes came in cases (one for uppercase and one for lowercase letters). The set of cases was called a font.The word is related to foundry, which would create the little metal shapes. Naturally, if you wanted to print larger text, you needed different (bigger) shapes, so those were a different font; a collection of fonts was called a type, which is why we call it typing. Variations—like bold or italic letters—were called that type’s “faces”.

we say a font contains several different weights (like “bold” and “normal”),But sometimes other weights as well, like “light”, “semibold”, “black”, and “condensed”. Good fonts tend to come in many weights. several different styles (like “italic” and “roman”, which is what not-italic is called),Sometimes there are other options as well, like maybe there’s a small-caps version; these are sometimes called options as well. And don’t get me started on automatic versus manual italics. and arbitrary sizes.Font looks especially good at certain sizes where hints tell the computer how to best to align it to the pixel grid. Welcome to the world of magic ink

## Measuring text

Text takes up space vertically and horizontally, and the font object’s metrics and measure methods measure that space

> bi_times.metrics()
> {'ascent': 15, 'descent': 7, 'linespace': 22, 'fixed': 0}
> bi_times.measure("Hi!")
> 31
> '''

The metrics call yields information about the vertical dimensions of the text: the linespace is how tall the text is, which includes an ascent which goes “above the line” and a descent that goes “below the line”.The fixed parameter is actually a boolean and tells you whether all letters are the same width, so it doesn’t really fit here. The ascent and descent matter when words in different sizes sit on the same line: they ought to line up “along the line”, not along their tops or bottoms.

The measure() method is more direct: it tells you how much horizontal space text takes up, in pixels. This depends on the text, of course, since different letters have different width:

## Word by word
