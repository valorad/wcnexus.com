

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const SDKSchema = new Schema({
    name: String,
    price: String,
    platform: String,
    receiver: String,
    steveAttitude: String
});

export const SDK = mongoose.model('sdk', SDKSchema);