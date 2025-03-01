import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

interface Person {
    id: number;
    name: string;
    cep: string;
    address: string;
    city: string;
    uf: string;
    phone?: string;
    active?: boolean;
}

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  //styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];

  constructor(public personService: PersonService, public router: Router) {}


  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.personService.getPeople().subscribe((data) => {
      this.people = data;
    });
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
