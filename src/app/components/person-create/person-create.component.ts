import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { Person } from 'src/app/interfaces/person.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
})
export class PersonCreateComponent implements OnInit {
  personForm!: FormGroup;

  constructor(private fb: FormBuilder, private cepService: CepService) {}

  ngOnInit(): void {
    this.personForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      endereco: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      uf: ['', [Validators.required, Validators.pattern(/^[A-Z]{2}$/)]]
    });
  }

  buscarCep(): void {
    const cep = this.personForm.get('cep')?.value;
    if (cep && cep.length === 8) {
      this.cepService.buscarCep(cep).subscribe((dados) => {
        if (!dados.erro) {
          this.personForm.patchValue({
            endereco: `${dados.logradouro}, ${dados.bairro}`,
            cidade: dados.localidade,
            uf: dados.uf
          });
        }
      });
    }
  }

  salvarPessoa(): void {
    if (this.personForm.valid) {
      console.log('Pessoa salva:', this.personForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
