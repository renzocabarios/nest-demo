import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { MONGO_URI } from './config';

@Module({
  imports: [TodoModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
