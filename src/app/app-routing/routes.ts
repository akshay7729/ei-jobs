import { Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { JobsComponent } from '../jobs/jobs.component';

export const routes:Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'jobs', component: JobsComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'}
];