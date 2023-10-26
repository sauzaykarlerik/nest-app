import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ThingService } from '../services/thing.service';
import { Thing } from '../models/thing.model';

@Controller()
export class ThingController {
  constructor(private readonly thingService: ThingService) {
  }

  @Get()
  getAll(): Promise<Thing[]> {
    return this.thingService.getAll();
  }

  @Post()
  post(@Body() thing: Thing): Promise<Thing> {
    return this.thingService.post(thing);
  }

  @Put()
  put(@Body() thing: Thing) {
    return this.thingService.put(thing);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.thingService.delete(id);
  }
}
