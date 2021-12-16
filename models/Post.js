const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    category: {
        type: String,
        required: [true, 'Please im begging you put category']
    },
    image:{
        type: String,
        required: [true, 'An image is required']
    },
    description:{
        type: String,
        required:[true, 'description about the product is required']
    }
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;