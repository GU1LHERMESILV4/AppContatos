import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './pages/person-list/person-list.component';
import { PersonCreateComponent } from './pages/person-create/person-create.component';
import { PersonEditComponent } from './pages/person-edit/person-edit.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'person', component: HomeComponent },
  { path: 'list', component: PersonListComponent },
  { path: 'create', component: PersonCreateComponent },
  { path: 'edit/:id', component: PersonEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
