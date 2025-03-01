# Gerenciamento de Pessoas - Angular 16

## Descrição
Este projeto tem como objetivo avaliar habilidades no desenvolvimento de aplicativos web utilizando o framework Angular 16. A aplicação permite listar, cadastrar, editar e excluir Pessoas, seguindo boas práticas e padrões recomendados.

## Funcionalidades
- **Listagem de Pessoas**: Exibe uma tabela com ID, Nome, Endereço, CEP, UF, Ativo e Contatos. Inclui botões de edição e exclusão.
- **Cadastro de Pessoas**: Permite adicionar novas pessoas preenchendo os campos obrigatórios.
- **Edição de Pessoas**: Permite editar os dados de uma pessoa cadastrada.
- **Exclusão de Pessoas**: Confirmação de remoção antes da exclusão do registro.
- **Busca automática de endereço via API do ViaCEP** ao digitar o CEP.

## Tecnologias Utilizadas
- **Angular 16**
- **TypeScript**
- **HTML5 & CSS3**
- **Bootstrap ou Material Angular (opcional para UI)**
- **API do ViaCEP** (para busca de endereços automática)
- **JSON Server (ou API REST real) para simulação de backend**

## Instalação e Execução
### Requisitos
- Node.js e npm instalados
- Angular CLI instalado (`npm install -g @angular/cli`)

### Passos
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Entre na pasta do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor JSON Server (se aplicável):
   ```sh
   json-server --watch db.json
   ```
5. Execute a aplicação Angular:
   ```sh
   ng serve
   ```
6. Acesse no navegador: [http://localhost:4200](http://localhost:4200)

## Boas Práticas Aplicadas
- Uso de **Interface/Type** para tipagem de objetos
- **Validações** de formulário (campos obrigatórios, tamanho máximo, tipos)
- Uso do **@Input** para passar dados para o componente de tabela
- Estrutura modularizada seguindo padrões do Angular
- Consumo de API RESTful

## Melhorias Futuras
- Implementação de autenticação e autorização
- Adição de paginação na listagem de pessoas
- Criação de testes unitários para os componentes e serviços

## Demonstração


