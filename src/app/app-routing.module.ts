import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './components/listagem-pessoas/listagem-pessoas.component';
import { FormularioPessoaComponent } from './components/formulario-pessoa/formulario-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },
  { path: 'listagem', component: ListagemPessoasComponent },
  { path: 'cadastro', component: FormularioPessoaComponent },
  { path: '**', redirectTo: 'listagem' } // Redireciona caso a rota seja inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
