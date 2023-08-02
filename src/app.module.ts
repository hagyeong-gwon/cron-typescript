import { Module } from '@nestjs/common';
import { CronJobModule } from './cronJob/cron-job.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CronJobModule,
    MongooseModule.forRoot(process.env.MONGO_URL, {
      connectionName: 'cron',
    }),
  ],
})
export class AppModule {}
