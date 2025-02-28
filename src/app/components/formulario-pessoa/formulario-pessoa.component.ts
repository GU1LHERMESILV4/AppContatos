import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService, Pessoa } from '../../services/pessoa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pessoa',
  templateUrl: './formulario-pessoa.component.html',
  styleUrls: ['./formulario-pessoa.component.css']
})
export class FormularioPessoaComponent implements OnInit {
  pessoaForm!: FormGroup;
  pessoaId!: number | null;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    this.pessoaId = this.route.snapshot.params['id'] ? +this.route.snapshot.params['id'] : null;

    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      celular: ['', Validators.required]
    });

    if (this.pessoaId) {
      this.pessoaService.getPessoaById(this.pessoaId).subscribe((data) => {
        this.pessoaForm.patchValue(data);
      });
    }
  }

  buscarCep(): void {
    const cep = this.pessoaForm.get('cep')?.value;
    if (cep.length === 8) {
      this.pessoaService.buscarCep(cep).subscribe((data) => {
        if (!data.erro) {
          this.pessoaForm.patchValue({
            endereco: `${data.logradouro}, ${data.bairro}`,
            cidade: data.localidade,
            uf: data.uf
          });
        }
      });
    }
  }

  salvar(): void {
    if (this.pessoaForm.valid) {
      const pessoa: Pessoa = this.pessoaForm.value;
      if (this.pessoaId) {
        this.pessoaService.atualizarPessoa(this.pessoaId, pessoa).subscribe(() => this.router.navigate(['/']));
      } else {
        this.pessoaService.adicionarPessoa(pessoa).subscribe(() => this.router.navigate(['/']));
      }
    }
  }
}
