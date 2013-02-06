exports.definition = {
	config : {
		"columns" : {
			name : 'TEXT',
			nickname : 'TEXT', // column values can have types with keywords
			fighterId : 'TEXT PRIMARY KEY'
		},

		"adapter" : {
			"type" : "sql_new",
			// The table name inside the sqlite database to use for
			// models and collections based on this definition.
			"collection_name" : "fighters",
			// idAttribute tells Alloy/Backbone to use this column in
			// my table as its unique identifier field. Without
			// specifying this, Alloy's default behavior is to create
			// and "alloy_id" field which will uniquely identify your
			// rows in the table with a text GUID.
			"idAttribute" : "fighterId"
		}
	},

	extendModel : function(Model) {
		_.extend(Model.prototype, {

		});
		// end extend

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {

			// extended functions go here

		});
		// end extend

		return Collection;
	}
}

