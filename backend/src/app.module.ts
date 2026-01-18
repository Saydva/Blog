import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TestApiModule } from './test-api/test-api.module';
import { PostModule } from './post/post.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TestApiModule,
    PostModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/blog',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
