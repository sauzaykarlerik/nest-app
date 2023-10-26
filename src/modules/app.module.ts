import { Module } from '@nestjs/common';
import { ThingController } from '../controllers/thing.controller';
import { ThingService } from '../services/thing.service';

@Module({
  imports: [],
  controllers: [ThingController],
  providers: [ThingService]
})
export class AppModule {
}
