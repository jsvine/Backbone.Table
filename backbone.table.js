/*
Backbone.Table 0.1.0
(c) 2012 Jeremy Singer-Vine, The Wall Street Journal
Backbone.Table is freely distributable under the MIT license.
https://github.com/jsvine/Backbone.Table
*/
Backbone.Table = Backbone.View.extend({
  tagName: "table",
  initialize: function() {
    return this.$el = this.$el || $(this.el);
  },
  template: _.template("<% var rows = collection.models || collection; %>\n<% if (rows.length) { %>\n<thead>\n	<tr>\n		<% _.each(columns, function (col) { %>\n			<th class=\"<%= col.className || '' %>\"><%= col.header %></th>\n		<% }) %>\n	</tr>\n</thead>\n<tbody>\n	<% _.each(rows, function (row, i) { %>\n	<tr class=\"<%= i % 2 ? 'even' : 'odd' %>\">\n		<% _.each(columns, function (col) { %>\n			<td class=\"<%= col.className %>\"<% if (col.getRaw) { %> value=\"<%= col.getRaw.call(row) %>\"<% } %>><%= col.getFormatted.call(row) %></td>\n		<% }) %>\n	</tr>\n	<% }) %>\n</tbody>\n<tfoot>\n	<tr>\n		<% _.each(columns, function (col) { %>\n			<th class=\"<%= col.className || '' %>\"><%= col.footer || \"\" %></th>\n		<% }) %>\n	</tr>\n</tfoot>\n<% } %>	"),
  render: function() {
    this.$el.html(this.template({
      collection: this.collection,
      columns: this.options.columns
    }));
    return this;
  }
});
