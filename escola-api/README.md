# API de Gestão Escolar (NestJS + MongoDB)

Esta documentação descreve a estrutura, o conteúdo, as ferramentas e o guia de execução de uma aplicação backend desenvolvida com **NestJS**, **TypeScript** e **MongoDB (Mongoose)** para a gestão de alunos.

---

## 📚 Conteúdo Desenvolvido

Nesta aula/módulo, foram implementadas as seguintes funcionalidades e conceitos:
* **Arquitetura Modular em NestJS**: Organização do código em módulos (`AlunosModule`), controladores (`AlunosController`), serviços (`AlunosService`) e esquemas de dados (`AlunosSchema`).
* **Persistência de Dados com MongoDB**: Conexão à base de dados NoSQL utilizando o `@nestjs/mongoose` e manipulação de documentos com o Mongoose.
* **Operações CRUD Completas**: 
  * `POST /alunos`: Criar um novo registo de aluno.
  * `GET /alunos`: Listar todos os alunos registados.
  * `GET /alunos/:id`: Consultar um aluno específico pelo seu ID (com tratamento de exceção `NotFoundException`).
  * `PATCH /alunos/:id`: Atualizar os dados de um aluno.
  * `DELETE /alunos/:id`: Remover um aluno da base de dados.
* **Validação e Transformação de Dados (DTOs)**: 
  * Utilização das bibliotecas `class-validator` e `class-transformer`.
  * Validação rigorosa de campos de entrada (ex: obrigatoriedade de campos, verificação de números inteiros positivos para a idade, unicidade de matrículas e validação de arrays de cursos).
* **Pipes Globais**: Configuração do `ValidationPipe` no ficheiro `main.ts` com as opções `whitelist`, `forbidNonWhitelisted` e `transform`.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **[Node.js](https://nodejs.org/)** & **[TypeScript](https://www.typescriptlang.org/)**: Base de execução e linguagem de programação do projeto.
* **[NestJS](https://nestjs.com/)**: Framework backend progressiva.
* **[MongoDB](https://www.mongodb.com/) & Mongoose**: Base de dados NoSQL e ODM para modelagem de dados.
* **Class-Validator & Class-Transformer**: Validação de requisições baseada em decoradores.
* **Postman / Insomnia**: Clientes HTTP utilizados para testar os endpoints da API.
* **MongoDB Compass**: Interface gráfica para gestão e visualização dos dados na base de dados.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar a aplicação no seu ambiente local:

### 1. Pré-requisitos
Certifique-se de que tem instalado na sua máquina:
* Node.js (versão LTS recomendada)
* MongoDB a ser executado localmente (porta padrão `27017`)

### 2. Instalação das Dependências
Abra o terminal na pasta raiz do projeto (`escola-api`) e execute o comando:
```bash
npm install