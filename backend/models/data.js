const mongoose = require('mongoose');
const { Schema } = mongoose;

const data = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true, 
    },
    age:{
        type: Number,
        required: true, 
    },
    timeSlot:{
        type: String,
        required: true,
    },
    startDate:{
        type: String,
        required: true,
    },
  });

  module.exports = mongoose.model('data', data);