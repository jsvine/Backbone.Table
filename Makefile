compile:
	coffee -cb backbone.table.coffee

minify:
	uglifyjs backbone.table.js > backbone.table.min.js
