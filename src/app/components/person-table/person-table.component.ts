import { Component, Input } from '@angular/core';
import { Person } from 'src/app/interfaces/person.model';

@Component({
  selector: 'app-person-table',
  templateUrl: '/src/app/components/person-table/person-table.component.html',
})
export class PersonTableComponent {
  @Input() people: Person[] = [];

  editPerson(id: number): void {
    console.log('Editar pessoa com ID:', id);
  }

  deletePerson(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      console.log('Pessoa excluída com ID:', id);
    }
  }
}
