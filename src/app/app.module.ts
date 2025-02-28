import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListagemPessoasComponent } from './components/listagem-pessoas/listagem-pessoas.component';
import { FormularioPessoaComponent } from './components/formulario-pessoa/formulario-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemPessoasComponent,
    FormularioPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
