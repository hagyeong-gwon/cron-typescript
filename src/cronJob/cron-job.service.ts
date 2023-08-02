import { Injectable } from '@nestjs/common';
import { CronJob } from './entitiy/cronJob.entity';

@Injectable()
export class CronJobService {
  private cronJobs: CronJob[] = [];

  getCronJobList(): CronJob[] {
    return [];
  }
}
