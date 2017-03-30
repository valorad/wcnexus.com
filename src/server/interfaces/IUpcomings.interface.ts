import { Document } from 'mongoose';

export interface IUpcomings extends Document {
    img: string,
    title: string,
    descr: string
}