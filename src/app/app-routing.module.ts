import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './pages/person-list/person-list.component';
import { PersonCreateComponent } from './pages/person-create/person-create.component';
import { PersonEditComponent } from './pages/person-edit/person-edit.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: PersonListComponent },
  { path: 'create', component: PersonCreateComponent },
  { path: 'edit/:id', component: PersonEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
