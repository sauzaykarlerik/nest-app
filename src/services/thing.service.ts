import { Injectable } from '@nestjs/common';
import { Thing, ThingModel } from '../models/thing.model';

@Injectable()
export class ThingService {
  getAll(): Promise<Thing[]> {
    return ThingModel.find();
  }

  post(thing: Thing): Promise<Thing> {
    return ThingModel.create(thing);
  }

  put(thing: Thing) {
    return ThingModel.updateOne({ _id: thing._id }, thing);
  }

  delete(id: string) {
    return ThingModel.deleteOne({ _id: id });
  }
}
