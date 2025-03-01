import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'create', component: PersonCreateComponent },
  { path: 'edit/:id', component: PersonEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
