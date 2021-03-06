import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/job';
import { JobsService } from '../services/jobs.service';
import { FilterPipe, SortByPipe } from '../pipes/checkbox.pipe';
import { CheckcityPipe } from '../pipes/checkcity.pipe';
import { DropdownPipe } from '../pipes/dropdown.pipe';
import { FiltersComponent } from '../filters/filters.component';
import { SelectboxPipe } from '../pipes/selectbox.pipe';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobList: Job[];
  sel;
  term;
  sliderValue: number = 0;
  minSal: number = 0;
  maxSal: number = 100;
  checked:any = [
    {
      id: "1",
      name: "Bangalore",
      selected: false
    },
    {
      id: "2",
      name: "Gurgoan",
      selected: false
    }
  ]

  public positionSelect: any[] = [
    {type: "Full Time"},
    {type: "Internship"},
    {type: "Freelance"}
  ]

  constructor(private jobservice: JobsService) {
   }

  ngOnInit() {
    this.jobList = this.jobservice.getJobs();
  }


}
