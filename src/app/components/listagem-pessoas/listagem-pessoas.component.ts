import { Component, OnInit } from '@angular/core';
import { PessoaService, Pessoa } from '../../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private router: Router) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas(): void {
    this.pessoaService.getPessoas().subscribe((data) => {
      this.pessoas = data;
    });
  }

  editarPessoa(id?: number) {
    if (id !== undefined) {
      this.router.navigate(['/editar', id]);
    }
  }  

  excluirPessoa(id: number): void {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.pessoaService.excluirPessoa(id).subscribe(() => {
        this.carregarPessoas();
      });
    }
  }
}
