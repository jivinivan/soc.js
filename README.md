# soc.js

An easier way to create social icons. Socjs was built for [Next Wave Sites](http://nws.co). We needed a way to generate social icons on the fly based on a user's icon settings (color, size, etc). 

 * No images.
 * Perfect on retina displays.
 * Minimal dependencies (~24kb minified)
 * Highly configurable.
 * Resolution independent.
 * Works in all major browsers. (IE8 does not support rounded corners however all other options work.)
 * Screen reader compatible.
 * MIT License

## Demo
For an interactive demo and a list of all supported options and icons please refer to the [project's homepage](http://ivansugerman.com/soc.js/).

## Installation
`bower install socjs`

or

[Download Files](https://github.com/jivinivan/soc.js/archive/master.zip)

## Usage

### Place the following in the ``<head></head>`` of your site.
```html
<link rel="stylesheet" type="text/css" href="PATH/TO/soc.min.css">
```

### Place the following where you'd like the icons to show.
```html
<div class="soc">
	<a href="http://facebook.com/" class="soc-facebook" title="Facebook"></a>
	<a href="http://twitter.com/" class="soc-twitter" title="Twitter"></a>
	<a href="http://instagram.com/" class="soc-instagram" title="Instagram"></a>
	<a href="http://pinterest.com/" class="soc-pinterest" title="Pinterest"></a>
	<a href="http://youtube.com/" class="soc-youtube" title="YouTube"></a>
	<a href="http://rss.com/" class="soc-rss" title="Rss"></a>
</div>
<script type="text/javascript" src="PATH/TO/soc.min.js"></script>
```

## Why is there a Javascript dependency?
You're right, it is not needed. You could make a few simple adjustments to the SASS and be off and running, but we have bigger plans for this which requires a more dynamic nature. More to come!

## Thanks To
Special thanks to [Socicon](http://socicon.com/) for the icon font.
Soc.js is brought to you by [Ivan Sugerman](https://twitter.com/jivinivan) and [Next Wave](http://nws.co)

## License

Soc.js is licensed under The MIT License (MIT)

Copyright (c) 2012-2014 [Ivan Sugerman](https://twitter.com/jivinivan)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.