const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    isSanitized: {
        type: Boolean,
    },
    unit:{
        type:String,
        required:true
    },
    expiryDate: {
        type: String,
    }, 
    createdDate: {
        type: Date,
        default: Date.now,     
    },
    updatedDate: {
        type: Date,
        default : Date.now
    },
    category: {
        type: String,
        enum: ['Grocery', 'Medical', 'Fruits & Veg', 'Berverages', 'Babycare', 'Cleaning'],
        required: true
    },
    location: {
        type: String,
        enum: ['Store', 'Kitchen'],
        required: true
    }
})

itemSchema.path('category').options.enum;
itemSchema.path('location').options.enum;

const itemModel = mongoose.model("TableItems", itemSchema)
module.exports = itemModel;