import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    },
    categoryId: {
        type: String,
        ref: 'Category',
        required: true,
    }
});

export default mongoose.model('Product', productSchema);
