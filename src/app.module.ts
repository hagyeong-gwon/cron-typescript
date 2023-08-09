import { Module } from '@nestjs/common';
import { CronJobModule } from './cronJob/cron-job.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySqlConfigService } from './config/db/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigService],
      useClass: MySqlConfigService,
      inject: [MySqlConfigService],
    }),
  ],
})
export class AppModule {}
