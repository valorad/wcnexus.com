import { model, Schema } from 'mongoose';
//const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

import { IUpcomings } from '../interfaces/IUpcomings.interface';

// Create Schema and Model
const upcomingSchema: Schema = new Schema({
    img: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    descr: {
        type: String,
        required: true
    },
});

export const upcomings = model<IUpcomings>('upcoming', upcomingSchema);