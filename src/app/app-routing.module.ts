import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './components/listagem-pessoas/listagem-pessoas.component';
import { FormularioPessoaComponent } from './components/formulario-pessoa/formulario-pessoa.component';

const routes: Routes = [
  { path: '', component: ListagemPessoasComponent },
  { path: 'cadastrar', component: FormularioPessoaComponent },
  { path: 'editar/:id', component: FormularioPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
