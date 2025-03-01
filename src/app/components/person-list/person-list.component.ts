import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor(public personService: PersonService, public router: Router) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.personService.getPeople().subscribe((data: Person[]) => {
      if (data.length > 0) {
        this.people = data.map(person => ({
          ...person,
          id: person.id ?? 0
        }));
      } else {
        this.loadExamplePeople(); // Carrega exemplos se a API não retornar nada
      }
    }, () => {
      this.loadExamplePeople(); // Em caso de erro, carrega exemplos também
    });
  }

  loadExamplePeople(): void {
    this.people = [
      {
        id: 1,
        nome: 'João Silva',
        endereco: 'Rua das Flores, 123',
        cep: '12345-678',
        uf: 'SP',
        telefone: '(11) 98765-4321'
      },
      {
        id: 2,
        nome: 'Maria Oliveira',
        endereco: 'Avenida Brasil, 456',
        cep: '87654-321',
        uf: 'RJ',
        telefone: '(21) 99988-7766'
      },
      {
        id: 3,
        nome: 'Carlos Santos',
        endereco: 'Praça Central, 789',
        cep: '54321-987',
        uf: 'MG',
        telefone: '(31) 91234-5678'
      }
    ];
  }

  editPerson(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deletePerson(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.personService.deletePerson(id).subscribe(() => {
        this.loadPeople();
      });
    }
  }
}
