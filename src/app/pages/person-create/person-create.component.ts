import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {
  personForm!: FormGroup;

  
  person: Person = {
    id: 0,
    nome: '',
    cep: '',
    endereco: '',
    uf: '',
    telefone: ''
  };
  constructor(private fb: FormBuilder, private cepService: CepService, private personService: PersonService) {}

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

  savePerson(): void {
    if (this.personForm.valid) {
      this.personService.savePerson(this.personForm.value).subscribe(() => {
        alert('Pessoa salva com sucesso!');
      }, error => {
        console.error('Erro ao salvar pessoa', error);
        alert('Erro ao salvar pessoa. Verifique os dados e tente novamente.');
      });
    }
  }

}
