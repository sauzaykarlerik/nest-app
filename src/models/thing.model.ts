import { Model, model, Schema } from 'mongoose';

export interface Thing {
  _id?: string;
  data: string;
}

const ThingSchema: Schema<Thing> = new Schema({
  data: String
});

export const ThingModel: Model<Thing> = model('Thing', ThingSchema);
