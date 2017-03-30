import { model, Schema } from 'mongoose';

import { IThemes } from '../interfaces/IThemes.interface';

const themeSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    titleImg: {
        type: String,
        required: true
    },
    descr: {
        type: String,
        required: false
    },
    cover: {
        type: String,
        required: true
    },
    slogan: {
        type: String,
        required: false
    },

});

export const themes = model<IThemes>('theme', themeSchema);