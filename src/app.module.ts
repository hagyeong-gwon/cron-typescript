import { Module } from '@nestjs/common';
import { CronJobModule } from './cronJob/cron-job.module';

@Module({
  imports: [CronJobModule]
})
export class AppModule {}
