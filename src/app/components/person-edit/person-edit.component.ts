import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
})
export class PersonEditComponent implements OnInit {
  person: Person = {
    id: 0,
    nome: '',
    cep: '',
    endereco: '',
    cidade: '',
    uf: '',
    telefone: ''
  };

  constructor(
    private personService: PersonService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.personService.getPersonById(id).subscribe((data) => {
        this.person = data;
      });
    }
  }

  updatePerson(): void {
    if (this.person.id) {
      this.personService.updatePerson(this.person.id, this.person).subscribe(() => {
        alert('Pessoa atualizada com sucesso!');
        this.router.navigate(['/list']);
      });
    }
  }
}
