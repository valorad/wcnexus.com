import { model, Schema } from 'mongoose';

import { IRecomSites } from '../interfaces/IRecomSites.interface';

// Create Schema and Model
const recomSiteSchema: Schema = new Schema({
    title: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    },
    descr: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    }
});

export const recomSites = model<IRecomSites>('recomsite', recomSiteSchema);