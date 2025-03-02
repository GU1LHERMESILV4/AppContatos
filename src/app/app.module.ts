import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { PersonListComponent } from './pages/person-list/person-list.component';
import { PersonEditComponent } from './pages/person-edit/person-edit.component';
import { PersonCreateComponent } from './pages/person-create/person-create.component';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonEditComponent,
    HomeComponent,
    PersonTableComponent,
    PersonCreateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,  
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
