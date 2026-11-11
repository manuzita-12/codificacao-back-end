# API de Gestão Escolar (NestJS + MongoDB)

Esta documentação descreve a estrutura, o conteúdo, as ferramentas e o guia de execução de uma aplicação backend desenvolvida com **NestJS**, **TypeScript** e **MongoDB (Mongoose)** para a gestão de alunos.

---

## 📚 Conteúdo Desenvolvido

Nesta aula/módulo, foram implementadas e aprimoradas as seguintes funcionalidades e conceitos:

* **Arquitetura Modular em NestJS**: Organização do código em módulos (`AlunosModule`), controladores (`AlunosController`), serviços (`AlunosService`) e esquemas de dados (`AlunosSchema`).
* **Persistência de Dados com MongoDB**: Conexão à base de dados NoSQL utilizando o `@nestjs/mongoose` e manipulação de documentos via Mongoose.
* **Operações CRUD Completas**: 
  * `POST /alunos`: Criar um novo registo de aluno.
  * `GET /alunos`: Listar todos os alunos com suporte a paginação.
  * `GET /alunos/:id`: Consultar um aluno específico pelo seu ID (com tratamento de exceção `NotFoundException`).
  * `PATCH /alunos/:id`: Atualizar parcialmente os dados de um aluno.
  * `DELETE /alunos/:id`: Remover um aluno da base de dados.
* **Paginação de Resultados**:
  * Suporte a parâmetros de consulta (*query parameters*) `page` (padrão: 1) e `limit` (padrão: 10).
  * Resposta estruturada contendo a lista de dados (`data`) e metadados de paginação (`meta`: `total`, `page`, `limit`, `totalPages`).
* **Documentação Interativa com Swagger**:
  * Configuração da OpenAPI/Swagger UI no endpoint `/api`.
  * Documentação detalhada dos endpoints, códigos de resposta HTTP (200, 201, 400, 404, 500) e exemplos de payload via `@nestjs/swagger` e `@ApiProperty`.
* **Validação e Transformação de Dados (DTOs)**: 
  * Utilização das bibliotecas `class-validator` e `class-transformer`.
  * Validação de DTOs de criação e atualização (`CreateAlunoDto` e `UpdateAlunoDto` estendendo `PartialType`).
  * Regras rigorosas: campos obrigatórios, idade como inteiro positivo, matrículas válidas e arrays de cursos com pelo menos 1 item.
* **Pipes Globais**: Configuração do `ValidationPipe` no ficheiro `main.ts` com as opções `whitelist: true`, `forbidNonWhitelisted: true` e `transform: true`.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **[Node.js](https://nodejs.org/)** & **[TypeScript](https://www.typescriptlang.org/)**: Base de execução e linguagem tipada do projeto.
* **[NestJS](https://nestjs.com/)**: Framework backend progressiva e modular.
* **[MongoDB](https://www.mongodb.com/) & Mongoose**: Banco de dados NoSQL e ODM para modelagem de dados.
* **[Swagger / OpenAPI](https://swagger.io/)**: Documentação interativa e testes diretos dos endpoints da API (`@nestjs/swagger`).
* **Class-Validator & Class-Transformer**: Validação declarativa de requisições.
* **Postman / Insomnia**: Clientes HTTP utilizados para testes de integração das rotas.
* **MongoDB Compass**: Interface gráfica para gestão e inspeção dos dados no MongoDB.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar a aplicação no seu ambiente local:

### 1. Pré-requisitos
Certifique-se de que tem instalado na sua máquina:
* **Node.js** (versão LTS recomendada)
* **MongoDB** em execução localmente (porta padrão `27017` ou URI configurada no `AppModule`)

### 2. Instalação das Dependências
Abra o terminal na pasta raiz do projeto (`escola-api`) e execute:
```bash
npm install