import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; // ✅ Certifique-se de importar o AppComponent
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonTableComponent } from './components/person-table/person-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonTableComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
