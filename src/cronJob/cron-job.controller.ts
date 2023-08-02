import { Controller, Get, Post } from '@nestjs/common';
import { CronJob } from './entitiy/cronJob.entity';
import { CronJobService } from './cron-job.service';

@Controller('cronjob')
export class CronJobController {
  @Get()
  getCronJobList(): CronJob[] {
    return [];
  }

  @Post()
  updateCronJob(): CronJob[] {
    return [];
  }
}
