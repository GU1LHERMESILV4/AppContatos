import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pessoa {
  id?: number;
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
  uf: string;
  celular: string;
  ativo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private apiUrl = 'https://seu-backend.com/api/pessoas'; // Troque pelo seu endpoint real

  constructor(private http: HttpClient) {}

  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  getPessoaById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  adicionarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  atualizarPessoa(id: number, pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/${id}`, pessoa);
  }

  excluirPessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // 🆕 Método para buscar o endereço via CEP
  buscarCep(cep: string): Observable<any> {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
