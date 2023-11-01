const mongoose = require('mongoose');

const StaticSchema = new mongoose.Schema({
    staticName: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Static', StaticSchema);