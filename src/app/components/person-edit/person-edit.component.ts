import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  //styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
  personId!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.personId = Number(this.route.snapshot.paramMap.get('id'));
  }

  saveChanges(): void {
    alert('Salvar alterações');
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
