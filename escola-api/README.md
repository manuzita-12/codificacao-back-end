# API de Gestão Escolar (NestJS + MongoDB)

Esta documentação descreve a estrutura, o conteúdo, as ferramentas e o guia de execução de uma aplicação backend desenvolvida com **NestJS**, **TypeScript** e **MongoDB (Mongoose)** para a gestão de alunos.

---

## 📚 Conteúdo Desenvolvido

Nesta aplicação, foram implementadas e aprimoradas as seguintes funcionalidades e conceitos:

* **Arquitetura Modular em NestJS**: Organização do código em módulos (`AlunosModule`), controladores (`AlunosController`), serviços (`AlunosService`) e esquemas de dados (`AlunoSchema`).
* **Configuração e Validação de Variáveis de Ambiente**:
  * Gerenciamento centralizado de variáveis de ambiente com `@nestjs/config` (`ConfigModule`) e esquema de validação em `src/config/env.config.ts`.
  * Validação automática na inicialização da aplicação (*fail-fast*), garantindo que variáveis obrigatórias (`DATABASE_URI` e `JWT_SECRET`) estejam definidas e que `NODE_ENV` aceite apenas valores válidos (`development`, `production` ou `test`).
  * Disponibilização de arquivo modelo `.env.exemplo` para facilitar a configuração em novos ambientes.
* **Persistência de Dados com MongoDB**: Conexão dinâmica à base de dados NoSQL utilizando `@nestjs/mongoose` com `MongooseModule.forRootAsync` (lendo `DATABASE_URI` do ambiente) e manipulação de documentos via Mongoose (`escola_dbn` / collection `alunos`).
* **Operações CRUD Completas**: 
  * `POST /alunos`: Criar um novo registo de aluno.
  * `GET /alunos`: Listar alunos com suporte a paginação, filtros opcionais e ordenação.
  * `GET /alunos/:id`: Consultar um aluno específico pelo seu ID.
  * `PATCH /alunos/:id`: Atualizar parcialmente os dados de um aluno.
  * `DELETE /alunos/:id`: Remover um aluno da base de dados.
* **Database Seeding (População Automática de Dados)**:
  * Criação do script independente `src/seeding.ts` utilizando o contexto da aplicação NestJS (`NestFactory.createApplicationContext`).
  * Geração automatizada de 150 registros fictícios de alunos em português (`@faker-js/faker/locale/pt_BR`) com nomes completos, idades (16 a 65 anos), matrículas numéricas únicas de 5 dígitos e vinculação aleatória a múltiplos cursos disponíveis.
  * Tratamento de exceções durante o povoamento para ignorar conflitos de matrículas duplicadas sem interromper a execução do script.
* **Tratamento de Erros e Exceções**:
  * **Exceções HTTP do NestJS**: Implementação de `NotFoundException` (404) para registos não encontrados, `ConflictException` (409) para conflitos de dados (como chaves duplicadas) e `InternalServerErrorException` (500) para falhas inesperadas no servidor.
  * **Tratamento de Erros do MongoDB**: Captura e tratamento específico de exceções do driver nativo utilizando `MongoServerError` (como o código de erro `11000` para índices únicos duplicados, como matrícula), garantindo respostas HTTP semânticas e amigáveis ao cliente.
* **Paginação, Filtros de Busca e Ordenação**:
  * **Paginação**: Suporte a parâmetros de consulta (*query parameters*) `page` (padrão: 1) e `limit` (padrão: 10) com uso de `DefaultValuePipe` e `ParseIntPipe`.
  * **Filtros Opcionais**:
    * `nome`: Permite filtrar a lista de alunos por nome/sobrenome com busca insensível a maiúsculas/minúsculas via Regex (ex: `?nome=Mariana`).
    * `curso`: Permite filtrar alunos vinculados a um curso específico (ex: `?curso=Programador Full Stack`).
  * **Ordenação Dinâmica**:
    * `orderBy`: Define o campo pelo qual os resultados serão ordenados (ex: `nome`, `idade`, `matricula`, `cursos`).
    * `orderDirection`: Define a direção da ordenação, aceitando `asc` (crescente, padrão) ou `desc` (decrescente) (ex: `?orderBy=nome&orderDirection=asc`).
  * **Consultas Combinadas**: Possibilidade de combinar filtros de texto, ordenação e paginação na mesma requisição (ex: `?nome=Lucas&curso=Excel Básico&orderBy=idade&orderDirection=desc&page=1&limit=5`).
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
* **[NestJS](https://nestjs.com/)**: Framework backend progressivo e modular (`@nestjs/common`, `@nestjs/core`, `@nestjs/config`).
* **[MongoDB](https://www.mongodb.com/) & Mongoose**: Banco de dados NoSQL e ODM para modelagem de dados (`timestamps`, índices únicos) e tratamento de `MongoServerError`.
* **[Faker.js](https://fakerjs.dev/) (`@faker-js/faker`) & [tsx](https://tsx.is/)**: Geração de massa de dados realista em português e execução direta de scripts TypeScript.
* **[Swagger / OpenAPI](https://swagger.io/)**: Documentação interativa e testes diretos dos endpoints da API (`@nestjs/swagger`).
* **Class-Validator & Class-Transformer**: Validação e transformação declarativa de requisições.
* **[Vitest](https://vitest.dev/)**: Framework de testes unitários e ponta a ponta (`vitest.config.ts` / `vitest.config.e2e.ts`).
* **Postman / Insomnia**: Clientes HTTP utilizados para testes de integração das rotas.
* **MongoDB Compass**: Interface gráfica para gestão e inspeção dos dados no banco `escola_dbn`.

---

## 📂 Estrutura do Projeto

```text
escola-api/
├── src/
│   ├── alunos/             # Módulo, controller, service, DTOs e schema de alunos
│   ├── config/
│   │   └── env.config.ts   # Validação e tipagem das variáveis de ambiente
│   ├── app.module.ts       # Módulo raiz da aplicação
│   ├── main.ts             # Ponto de entrada, ValidationPipe global e Swagger
│   └── seeding.ts          # Script de população inicial do banco de dados
├── test/                   # Testes automatizados (unitários e E2E)
├── .env                    # Variáveis de ambiente locais (ignorado pelo Git)
├── .env.exemplo            # Modelo de variáveis de ambiente necessárias
└── package.json            # Dependências e scripts do projeto