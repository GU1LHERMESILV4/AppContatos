import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Person {
  id: number;
  name: string;
  address: string;
  cep: string;
  uf: string;
  phone: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
