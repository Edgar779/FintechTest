const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String
    },

    name: {
        type: String
    },
    price: {
        type: String
    },
    suggestion: {
        type: String
    },
    description: {
        type: String,
    },
    start: {
        type: String,
    },
    end: {
        type: String,
    },
    sale: {
        type: String
    },
    type: {
        type: String
    },
    // products: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Product"
    // }], 
    createdDt: { type: Date, default: Date.now },

    updatedDt: { type: Date, default: Date.now },

});

const Car = mongoose.model('Car', schema);
module.exports = Car;