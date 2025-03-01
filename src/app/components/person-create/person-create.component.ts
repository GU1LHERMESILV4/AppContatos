import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  //styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent {
  person = {
    name: '',
    cep: '',
    address: '',
    city: '',
    uf: ''
  };

  constructor(public personService: PersonService, public router: Router) {}

  savePerson(): void {
    if (!this.person.name || !this.person.cep || !this.person.address || !this.person.city || !this.person.uf) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    this.personService.createPerson(this.person).subscribe(() => {
      alert('Pessoa cadastrada com sucesso!');
      this.router.navigate(['/']);
    });
  }
}
