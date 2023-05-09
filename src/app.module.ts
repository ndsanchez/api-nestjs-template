import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { db } from './config/db';

@Module({
  imports: [TypeOrmModule.forRoot(db)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
