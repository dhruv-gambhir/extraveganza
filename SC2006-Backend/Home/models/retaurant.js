import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    x : {   
        type: Number,
        required: true
    },
    y : {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    vegan: {
        type: Number,
        required: false
    },
    vegetarian: {
        type: Number,
        required: false
    },
    glutenFree: {
        type: Number,
        required: false
    },
    lactoseFree: {
        type: Number,
        required: false
    },
    rating: {
        type: Number,
        required: false
    }
});

export default mongoose.model('Restaurant', restaurantSchema);


