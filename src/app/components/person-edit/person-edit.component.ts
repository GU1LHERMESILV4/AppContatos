import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  person: Person = {
    id: 0,
    nome: '',
    cep: '',
    endereco: '',
    uf: '',
    telefone: ''
  };

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtém o ID da URL
    if (id) {
      this.personService.getPersonById(id).subscribe((data: Person) => {
        if (data) {
          this.person = data; // Preenche os campos com os dados do contato
        }
      });
    }
  }

  updatePerson(): void {
    this.personService.updatePerson(this.person.id, this.person).subscribe(() => {
      alert('Contato atualizado com sucesso!');
      this.router.navigate(['/list']);
    });
  }

  goBack(): void {
    this.router.navigate(['/list']);
  }
}
