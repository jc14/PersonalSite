var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		required: true
	},
	colorKey: {
		type: String,
		required: true
	},
	links: {
		type: Array,
		required: true
	}
});

// Export model
module.exports = mongoose.model('project', ProjectSchema);
