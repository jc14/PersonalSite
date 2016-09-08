var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	header: {
		type: String,
		required: true
	},
	imageURL: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

// Export model
module.exports = mongoose.model('project', ProjectSchema);