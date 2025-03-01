export interface Person {
    id: number;
    name: string;
    cep: string;
    address: string;
    city: string;
    uf: string;
    phone?: string;
    active?: boolean; // Caso tenha um campo "Ativo"
  }
  