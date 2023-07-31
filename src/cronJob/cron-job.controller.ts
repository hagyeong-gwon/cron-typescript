import { Controller, Get, Post } from '@nestjs/common';
import { GetCronJob } from './dto/get-cron-job.dto';
@Controller('cronjob')
export class CronJobController {
  @Get()
  getCronJobList(): GetCronJob[] {
    return [];
  }

  @Post()
  updateCronJobList(): GetCronJob[] {
    return [];
  }

}