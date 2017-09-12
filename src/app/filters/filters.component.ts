import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job';
import { JobsService } from '../services/jobs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filter } from '../shared/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {

  jobList: Job[];
  filterForm: FormGroup;
  filter: Filter;

  constructor(private jobservice: JobsService, private fb: FormBuilder) { 
  	this.filterJob();
  }

  ngOnInit() {
    this.jobList = this.jobservice.getJobs();
  }

  filterJob(){
  	this.filterForm = this.fb.group({
  		Bangalore:false,
  		Chennai:false,
  	});
  }

  onSubmit(){
  	this.filter = this.filterForm.value();
  	console.log(this.filter);
  	this.filterForm.reset();
  }

}
