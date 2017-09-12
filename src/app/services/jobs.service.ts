import { Injectable } from '@angular/core';
import { Job } from '../shared/job';
import { JOBS } from '../shared/jobdata';

@Injectable()
export class JobsService {

  constructor() { }

  getJobs(): Job[] {
  	return JOBS;
  }

}
