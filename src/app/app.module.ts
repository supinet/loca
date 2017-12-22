import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitestComponent } from './initest/initest.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InitestComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
