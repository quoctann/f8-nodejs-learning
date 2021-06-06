const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema({
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, required: true },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Course', Course);