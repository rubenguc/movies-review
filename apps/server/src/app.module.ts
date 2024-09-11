import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
//modules
import {
  AuthModule,
  PostModule,
  FollowerModule,
  NotificationModule,
  CommentModule,
  ThreadModule,
} from './modules';
import { EnvConfiguration } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),
    MongooseModule.forRoot(process.env.MONGODB),

    AuthModule,
    PostModule,
    ThreadModule,
    FollowerModule,
    CommentModule,
    NotificationModule,
  ],
})
export class AppModule {}
