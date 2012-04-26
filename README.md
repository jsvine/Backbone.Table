# Backbone.Table

Render any Backbone.js Collection as an HTML table. No rocket science here; basically just a Backbone.View wrapper around an Underscore.js template. 


## Examples

- __Rudimentary example__, starting from absolute scratch: [http://jsfiddle.net/jsvine/jk57F/](http://jsfiddle.net/jsvine/jk57F/)

- __Slightly fancier example__, having fun with *getFormatted* functions: [http://jsfiddle.net/jsvine/dJcae/](http://jsfiddle.net/jsvine/dJcae/)

- __"Advanced" example__, using *getValue* functions to help with table-sorting: [http://jsfiddle.net/jsvine/P9SwZ/](http://jsfiddle.net/jsvine/P9SwZ/)


## Step-By-Step

*Note: [Click here](http://jsfiddle.net/jsvine/dJcae/) for the interactive code and result.*

1. Load Backbone.Table anytime after you've loaded Backbone.js

		```html
		<script src="js/libs/backbone.js"></script>
		<script src="js/libs/backbone.table.js"></script>
		```

2. Go about your normal Backbone routine.

		var Vertebrate = {};
		Vertebrate.Model = Backbone.Model.extend();
		Vertebrate.Collection = Backbone.Collection.extend({
			model: Vertebrate.Model
		});
		var vertebrates = new Vertebrate.Collection([
			{
				tax_class: "Angatha",
				description: "jawless fishes",
				wiki_url: "http://en.wikipedia.org/wiki/Agnatha",
				img: "http://upload.wikimedia.org/wikipedia/commons/3/3f/Lampetra_fluviatilis.jpg"
			}, [ . . . ]
			// More model data
		]);

3. Create a new Backbone.Table instance, passing along your collection and an array of column definitions.

		var vertebrate_table = new Backbone.Table({
			collection: vertebrates,
			columns: [
				{
					header: "Class",
					className: "vertebrate-class",
					getFormatted: function() {
						return "<a href='" + this.get("wiki_url") + "' target='_blank'>" + this.get("tax_class") + "</a>";
					}
				},{
					header: "Description",
					className: "vertebrate-description",
					getFormatted: function() {
						return this.get("description");
					}
				},{
					header: "Example Image",
					className: "vertebrate-image",
					getFormatted: function() {
						return "<img src='" + this.get("img") + "'/>";
					}
				}
			]
		});

4. Render the table.

		$("body").append(vertebrate_table.render().el);


## Extras

- Each column's optional *getValue* accepts a function, the return value of which sets each cell's *value* attribute. Useful for table-sorting. See [this interactive demo](http://jsfiddle.net/jsvine/P9SwZ/) for an example.

- You can use Backbone.Table with plain-old arrays instead of proper Backbone.Collections. See [this interactive demo](http://jsfiddle.net/jsvine/gqsd8/) for an example.
