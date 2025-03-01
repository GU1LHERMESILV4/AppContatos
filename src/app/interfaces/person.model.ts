export interface Person {
  id: number;
  nome: string;
  cep: string;
  endereco: string;
  uf: string;
  telefone?: string;  
  ativo?: boolean;
}
