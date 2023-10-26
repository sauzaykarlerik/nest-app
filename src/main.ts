import mongoose from 'mongoose';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

const port: number = 3000;
const user: string = 'TO_BE_DEFINED';
const password: string = 'TO_BE_DEFINED';
const cluster: string = 'TO_BE_DEFINED';
const options: string = '/?retryWrites=true&w=majority';
const uri: string = 'mongodb+srv://' + user + ':' + password + '@' + cluster + options;

function bootstrap() {
  mongoose.connect(uri)
    .then(() => {
      console.log('Connection to MongoDB succeeded');
      NestFactory.create(AppModule).then(app => {
        app.enableCors();
        app.listen(port)
          .then(() => console.log('Server Nest running on http://localhost:' + port))
          .catch(() => console.error('Server failed to start'));
      });
    })
    .catch(() => {
      console.error('Connection to MongoDB failed');
    });
}

bootstrap();
