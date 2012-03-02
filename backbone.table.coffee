Backbone.Table = Backbone.View.extend
	tagName: "table"
	initialize: () ->
		@$el = @$el or $(@el)
	template: _.template """
		<% var rows = collection.models || collection; %>
		<% if (rows.length) { %>
		<thead>
			<tr>
				<% _.each(columns, function (col) { %>
					<th class="<%= col.className || '' %>"><%= col.header %></th>
				<% }) %>
			</tr>
		</thead>
		<tbody>
			<% _.each(rows, function (row, i) { %>
			<tr class="<%= i % 2 ? 'even' : 'odd' %>">
				<% _.each(columns, function (col) { %>
					<td class="<%= col.className %>"<% if (col.getRaw) { %> value="<%= col.getRaw.call(row) %>"<% } %>><%= col.getFormatted.call(row) %></td>
				<% }) %>
			</tr>
			<% }) %>
		</tbody>
		<tfoot>
			<tr>
				<% _.each(columns, function (col) { %>
					<th class="<%= col.className || '' %>"><%= col.footer || "" %></th>
				<% }) %>
			</tr>
		</tfoot>
		<% } %>	
	"""
	render: () ->
		@$el.html @template
			collection: @collection
			columns: @options.columns
		return @
