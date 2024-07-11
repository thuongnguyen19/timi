import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowcase: true
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
        require: true,

    },
        quantity: {
        type: String,
        required: true,

    },
        featured: {
        type: Boolean,
        default: false

    },
    //     {
    //   "id": 4,
    //   "name": "áo croptop",
    //   "price": 200,
    //   "image": "smartwatch.jpg",
    //   "desc": "A smartwatch with various features",
    //   "quantity": 20,
    //   "featured": false
    // }

})
export default mongoose.model('product', productSchema);