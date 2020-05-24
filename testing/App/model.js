const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    isSanatized: Boolean,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updateDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }

});

itemSchema.pre('find', (next) => {
   
    if (true) {
        next();
    }
});


const ItemModel = mongoose.model('Items', itemSchema);
module.exports = ItemModel;