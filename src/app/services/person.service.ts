import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Person {
  id?: number;
  name: string;
  cep: string;
  address: string;
  city: string;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://localhost:8080/api/pessoas';

  constructor(private http: HttpClient) {}

  createPerson(data: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}`, data);
  }
  
  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }  

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
