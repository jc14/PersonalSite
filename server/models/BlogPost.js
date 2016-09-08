var mongoose = require("mongoose");

var BlogPostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	datePosted: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
});

// Export model
module.exports = mongoose.model('blogPost', BlogPostSchema);