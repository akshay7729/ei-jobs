import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job';

const JOBS: Job[] = [
  						{
  							company:'Entrepreneurship India',
  							position:'Social Media Manager',
  							type:'Internship',
  							salary:'5k - 10k',
  							location:'Bangalore',
  							team:'5',
  							website:'www.entrepreneurshipindia.co.in',
  							applyUrl:'http://www.entrepreneurshipindia.co.in'
  						},
  						{
  							company:'Google',
  							position:'Product Manager',
  							type:'Full Time',
  							salary:'5000k - 10000k',
  							location:'Bangalore',
  							team:'5000',
  							website:'www.google.com',
  							applyUrl:'http://www.google.com'
  						},
  						{
  							company:'Entrepreneurship India',
  							position:'Social Media Manager',
  							type:'Internship',
  							salary:'5k - 10k',
  							location:'Bangalore',
  							team:'5',
  							website:'www.entrepreneurshipindia.co.in',
  							applyUrl:'http://www.entrepreneurshipindia.co.in'
  						},
  						{
  							company:'Google',
  							position:'Product Manager',
  							type:'Full Time',
  							salary:'5000k - 10000k',
  							location:'Bangalore',
  							team:'5000',
  							website:'www.google.com',
  							applyUrl:'http://www.google.com'
  						},

  					 ];

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobList = JOBS;

  constructor() { }

  ngOnInit() {
  }

}
