# Backbone.Table

Render any Backbone.js Collection as an HTML table. No rocket science here; basically just a Backbone.View wrapper around an Underscore.js template. 


## Examples

- __Rudimentary example__, stepping through the basics: [http://jsfiddle.net/jsvine/jk57F/](http://jsfiddle.net/jsvine/jk57F/)

- __Slightly fancier example__, having fun with *getFormatted* functions: [http://jsfiddle.net/jsvine/dJcae/](http://jsfiddle.net/jsvine/dJcae/)

- __"Advanced" example__, using *getValue* functions to help with table-sorting: [http://jsfiddle.net/jsvine/P9SwZ/](http://jsfiddle.net/jsvine/P9SwZ/)


## Extras

- Each column's optional *getValue* accepts a function, the return value of which sets each cell's *value* attribute. Useful for table-sorting. See [this interactive demo](http://jsfiddle.net/jsvine/P9SwZ/) for an example.

- You can use Backbone.Table with plain-old arrays instead of proper Backbone.Collections. See [this interactive demo](http://jsfiddle.net/jsvine/gqsd8/) for an example.
