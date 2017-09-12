import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobList: Job[];

  constructor(private jobservice: JobsService) { }

  ngOnInit() {
    this.jobList = this.jobservice.getJobs();
  }

}
