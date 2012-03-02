compile:
	coffee -c backbone.table.coffee

minify:
	uglifyjs backbone.table.js > backbone.table.min.js
