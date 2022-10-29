const mongoose = require('mongoose');

const Comapign=require('/compaign');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        lowercase: true,
    },
    compaigns:[{
        type:Schema.Types.ObjectId,
        ref:'Compaign'
    }]
})

const User = mongoose.model('User',userSchema);

module.exports = User;