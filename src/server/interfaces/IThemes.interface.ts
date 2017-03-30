import { Document } from 'mongoose';

export interface IThemes extends Document {
    name: string,
    className: string,
    title: string,
    titleImg: string,
    descr?: string
    cover: string,
    slogan?: string,
}