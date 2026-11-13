# API de Gestão Escolar (NestJS + MongoDB)

Esta documentação descreve a estrutura, o conteúdo, as ferramentas e o guia de execução de uma aplicação backend desenvolvida com **NestJS**, **TypeScript** e **MongoDB (Mongoose)** para a gestão de alunos.

---

## 📚 Conteúdo Desenvolvido

Nesta aplicação, foram implementadas e aprimoradas as seguintes funcionalidades e conceitos:

* **Arquitetura Modular em NestJS**: Organização do código em módulos (`AlunosModule`), controladores (`AlunosController`), serviços (`AlunosService`) e esquemas de dados (`AlunosSchema`).
* **Persistência de Dados com MongoDB**: Conexão à base de dados NoSQL utilizando o `@nestjs/mongoose` e manipulação de documentos via Mongoose.
* **Operações CRUD Completas**: 
  * `POST /alunos`: Criar um novo registo de aluno.
  * `GET /alunos`: Listar alunos com suporte a paginação, filtros opcionais e ordenação
  * `GET /alunos/:id`: Consultar um aluno específico pelo seu ID.
  * `PATCH /alunos/:id`: Atualizar parcialmente os dados de um aluno.
  * `DELETE /alunos/:id`: Remover um aluno da base de dados.
* **Tratamento de Erros e Exceções (Atualizado)**:
  * **Exceções HTTP do NestJS**: Implementação de `NotFoundException` (404) para registos não encontrados, `ConflictException` (409) para conflitos de dados (como chaves duplicadas) e `InternalServerErrorException` (500) para falhas inesperadas no servidor.
  * **Tratamento de Erros do MongoDB**: Captura e tratamento específico de exceções do driver nativo utilizando `MongoServerError` (como o código de erro `11000` para índices únicos duplicados, como matrícula), garantindo respostas HTTP semânticas e amigáveis ao cliente.
* **Paginação, Filtros de Busca e Ordenação**:
  * **Paginação**: Suporte a parâmetros de consulta (*query parameters*) `page` (padrão: 1) e `limit` (padrão: 10) com uso de `DefaultValuePipe` e `ParseIntPipe`.
  * **Filtros Opcionais**:
    * `nome`: Permite filtrar a lista de alunos por nome/sobrenome com busca insensível a maiúsculas/minúsculas via Regex (ex: `?nome=Jamilly`).
    * `curso`: Permite filtrar alunos vinculados a um curso específico (ex: `?curso=Engenharia Civil`).
  * **Ordenação Dinâmica**:
    * `orderBy`: Define o campo pelo qual os resultados serão ordenados (ex: `nome`, `idade`, `matricula`, `curso`).
    * `orderDirection`: Define a direção da ordenação, aceitando `asc` (crescente, padrão) ou `desc` (decrescente) (ex: `?orderBy=nome&orderDirection=asc`).
  * **Consultas Combinadas**: Possibilidade de combinar filtros de texto, ordenação e paginação na mesma requisição (ex: `?nome=Ana&curso=Psicologia&orderBy=idade&orderDirection=desc&page=1&limit=5`).
  * **Resposta Estruturada**: Retorno com a lista filtrada/ordenada (`data`) e metadados atualizados (`meta`: `total`, `page`, `limit`, `totalPages`).
* **Documentação Interativa com Swagger**:
  * Configuração da OpenAPI/Swagger UI no endpoint `/api`.
  * Mapeamento detalhado dos *query parameters* (`page`, `limit`, `nome`, `curso`, `orderBy`, `orderDirection`) via decorador `@ApiQuery` (incluindo suporte a `enum` para `orderDirection`).
  * Documentação detalhada dos endpoints, códigos de resposta HTTP (200, 201, 400, 404, 409, 500) e exemplos de payload via `@nestjs/swagger`, `@ApiOperation`, `@ApiResponse` e `@ApiProperty`.
* **Validação e Transformação de Dados (DTOs)**: 
  * Utilização das bibliotecas `class-validator` e `class-transformer`.
  * Validação de DTOs de criação e atualização (`CreateAlunoDto` e `UpdateAlunoDto` estendendo `PartialType`).
  * Regras rigorosas: campos obrigatórios, idade como inteiro positivo, matrículas válidas e arrays de cursos com pelo menos 1 item.
* **Pipes Globais**: Configuração do `ValidationPipe` no ficheiro `main.ts` com as opções `whitelist: true`, `forbidNonWhitelisted: true` e `transform: true`.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **[Node.js](https://nodejs.org/)** & **[TypeScript](https://www.typescriptlang.org/)**: Base de execução e linguagem tipada do projeto.
* **[NestJS](https://nestjs.com/)**: Framework backend progressivo e modular.
* **[MongoDB](https://www.mongodb.com/) & Mongoose**: Banco de dados NoSQL e ODM para modelagem de dados e tratamento de `MongoServerError`.
* **[Swagger / OpenAPI](https://swagger.io/)**: Documentação interativa e testes diretos dos endpoints da API (`@nestjs/swagger`).
* **Class-Validator & Class-Transformer**: Validação e transformação declarativa de requisições.
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