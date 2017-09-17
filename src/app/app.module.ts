import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { FooterComponent } from './footer/footer.component';
import { JobsService } from './services/jobs.service';
import { FiltersComponent } from './filters/filters.component';
import { FilterPipe } from './pipes/checkbox.pipe';
import { SortByPipe } from './pipes/checkbox.pipe';
import { CheckcityPipe } from './pipes/checkcity.pipe';
import { DropdownPipe } from './pipes/dropdown.pipe';
import { SelectboxPipe } from './pipes/selectbox.pipe';
import { RangePipe } from './pipes/range.pipe';
import { minSalaryPipe } from './pipes/range.pipe';
import { maxSalaryPipe } from './pipes/range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JobsComponent,
    FooterComponent,
    FiltersComponent,
    FilterPipe,
    SortByPipe,
    CheckcityPipe,
    DropdownPipe,
    SelectboxPipe,
    RangePipe,
    minSalaryPipe,
    maxSalaryPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
