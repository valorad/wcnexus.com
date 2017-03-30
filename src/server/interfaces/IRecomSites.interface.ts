import { Document } from 'mongoose';

export interface IRecomSites extends Document {
    title?: string,
    img: string,
    descr?: string,
    link?: string
}