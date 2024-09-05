import { Module } from '@nestjs/common';

//modules
import {
  AuthModule,
  PostModule,
  FollowerModule,
  NotificationModule,
  CommentModule,
  ThreadModule,
} from './modules';

@Module({
  imports: [
    AuthModule,
    PostModule,
    ThreadModule,
    FollowerModule,
    CommentModule,
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
