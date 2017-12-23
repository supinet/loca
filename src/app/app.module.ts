import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitestComponent } from './initest/initest.component';
import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InitestComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
