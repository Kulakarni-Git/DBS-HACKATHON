const mongoose = require('mongoose');

const User=require('/user');

const compaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['celebrations', 'accidents', 'natural calamities','social issues']
    },
    users:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]
})

const Compaign = mongoose.model('Compaign', compaignSchema);

module.exports = Compaign;