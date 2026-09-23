# 🚀 Gestão de Convidados — Mapeamento de Métodos HTTP com NestJS (Aulas 08 e 09)

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Insomnia](https://img.shields.io/badge/Insomnia-5849BE?style=for-the-badge&logo=insomnia&logoColor=white)](https://insomnia.rest/)

## 📝 Descrição do Projeto

Este projeto foi desenvolvido durante as **Aulas 08 e 09** para aprofundar os conhecimentos na criação de **APIs RESTful** utilizando o framework **NestJS**. 

A aplicação consiste em um módulo de **Gestão de Convidados**, construído progressivamente a partir da simulação de uma lista em memória. Durante as aulas, implementamos as operações fundamentais de leitura, escrita, atualização parcial e remoção, aplicando os conceitos de arquitetura em camadas e decoradores do NestJS.

---

## 💡 O que eu Aprendi

Durante a construção e evolução deste projeto, foram desenvolvidas as seguintes habilidades técnicas:

1. **Arquitetura modular e padronizada do NestJS:**
   - Separação clara de responsabilidades entre **Controllers** (camada de entrada/rotas) e **Services** (camada de regras de negócio e manipulação dos dados)[span_0](start_span)[span_0](end_span)[span_1](start_span)[span_1](end_span).
   - Utilização de decoradores (`@Controller()`, `@Injectable()`, `@Get()`, `@Post()`, `@Patch()`, `@Delete()`) para estruturação das rotas[span_2](start_span)[span_2](end_span)[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span).

2. **Tipagem e Modelagem com DTOs (*Data Transfer Objects*):**
   - Criação do `CriarConvidadoDto` para definir o contrato de entrada de dados via corpo da requisição[span_5](start_span)[span_5](end_span)[span_6](start_span)[span_6](end_span).
   - Refatoração da estrutura de dados para suportar múltiplos atributos (`nome` e `idade`)[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span).

3. **Injeção de Dependências:**
   - Registro de provedores (`providers`) no `AppModule` e injeção do `ConvidadosService` no `ConvidadosController` via construtor[span_9](start_span)[span_9](end_span)[span_10](start_span)[span_10](end_span).

4. **Manipulação de Parâmetros e Corpo das Requisições:**
   - Extração de parâmetros de rota dinâmicos com `@Param('id')`[span_11](start_span)[span_11](end_span).
   - Extração de dados da requisição utilizando `@Body()`[span_12](start_span)[span_12](end_span).

5. **Tratamento de Exceções e Métodos de Erro do NestJS:**
   - Lançamento de exceções HTTP nativas como `NotFoundException` quando um recurso específico não é encontrado no array[span_13](start_span)[span_13](end_span).
   - Retorno de códigos de status HTTP sem corpo de resposta via `@HttpCode(204)`[span_14](start_span)[span_14](end_span).

---

## 🛠️ Passo a Passo do Desenvolvimento nas Aulas

Abaixo está a sequência exata de etapas de desenvolvimento aplicadas nas aulas:

### **Etapa 1: Estruturação das Aulas 08 e 09 (Setup Inicial e Rota de Status)**
1. Configuração inicial do módulo raiz (`AppModule`) no NestJS[span_15](start_span)[span_15](end_span).
2. Criação do `AppService` contendo o método `getHello()` que retorna a string de verificação `'Status: Servidor Ativo!'`[span_16](start_span)[span_16](end_span).
3. Configuração do `AppController` mapeando o endpoint `GET /status`[span_17](start_span)[span_17](end_span).

### **Etapa 2: Módulo de Convidados, Listagem e Cadastro (Aula 08)**
4. Criação da estrutura de módulos para convidados (`ConvidadosController` e `ConvidadosService`)[span_18](start_span)[span_18](end_span)[span_19](start_span)[span_19](end_span)[span_20](start_span)[span_20](end_span).
5. Criação do `CriarConvidadoDto` para definir o formato de entrada dos dados[span_21](start_span)[span_21](end_span).
6. Implementação da rota `GET /convidados` para listar os convidados iniciais da aplicação[span_22](start_span)[span_22](end_span)[span_23](start_span)[span_23](end_span).
7. Criação da rota `POST /convidados` usando `@Body()` para cadastrar novos convidados[span_24](start_span)[span_24](end_span).

### **Etapa 3: Evolução do Modelo, Edição e Remoção (Aula 09)**
8. **Atualização da Lista:** Inclusão da propriedade `idade` na lista base do `ConvidadosService` e atualização do arquivo `criar-convidado.dto.ts`[span_25](start_span)[span_25](end_span)[span_26](start_span)[span_26](end_span).
9. **Implementação de Busca Auxiliar:** Criação da função `encontrarConvidado(id)` no Service com tratamento do erro `NotFoundException` para reaproveitamento de código[span_27](start_span)[span_27](end_span).
10. **Atualização Parcial (`PATCH`):** Mapeamento do método `@Patch(':id')` no Controller e criação da regra `atualizarIdade()` no Service para alterar a idade de um convidado dinamicamente[span_28](start_span)[span_28](end_span)[span_29](start_span)[span_29](end_span).
11. **Remoção (`DELETE`):** Mapeamento da rota `@Delete(':id')` com decorador `@HttpCode(204)` no Controller e implementação da remoção no array através do método `splice()` no Service[span_30](start_span)[span_30](end_span)[span_31](start_span)[span_31](end_span).
12. **Validação Geral:** Execução da aplicação (`npm run start:dev`) e realização de chamadas de teste em todas as rotas através do **Insomnia**[span_32](start_span)[span_32](end_span)[span_33](start_span)[span_33](end_span).

---

## 📚 Evolução por Aula

### 🔹 Aula 08: Leitura e Cadastro (GET e POST)
* Estruturação inicial do controller `ConvidadosController` e da rota `/convidados`[span_34](start_span)[span_34](end_span).
* Implementação do método `GET` para retorno da lista inicial de convidados (contendo apenas o campo de nome)[span_35](start_span)[span_35](end_span)[span_36](start_span)[span_36](end_span).
* Implementação do método `POST` para criação de novos registros a partir do corpo da requisição (`@Body()`)[span_37](start_span)[span_37](end_span).

### 🔹 Aula 09: Atualização da Lista, Adição do Campo Idade e Remoção (PATCH e DELETE)
* **Evolução do Modelo:** A lista em memória e o DTO foram atualizados para incluir a propriedade `idade` (`number`) além de `nome` (`string`)[span_38](start_span)[span_38](end_span)[span_39](start_span)[span_39](end_span).
* **Atualização Parcial (`PATCH /convidados/:id`):** Implementação da rota para atualizar exclusivamente a idade de um convidado já cadastrado[span_40](start_span)[span_40](end_span)[span_41](start_span)[span_41](end_span).
* **Remoção (`DELETE /convidados/:id`):** Implementação da funcionalidade de exclusão de convidados pelo ID utilizando o método `splice()`, configurada com o código HTTP `204 (No Content)`[span_42](start_span)[span_42](end_span)[span_43](start_span)[span_43](end_span).
* **Tratamento de Erros:** Adição do `NotFoundException` para identificar requisições direcionadas a IDs inexistentes[span_44](start_span)[span_44](end_span).

---

## 🛠️ Ferramentas e Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript no servidor.
* **[NestJS](https://nestjs.com/):** Framework Node.js para construção de aplicações backend eficientes e escaláveis.
* **[TypeScript](https://www.typescriptlang.org/):** Superset JavaScript que adiciona tipagem estática ao código[span_45](start_span)[span_45](end_span).
* **[VS Code](https://code.visualstudio.com/):** Editor de código-fonte principal.
* **[Insomnia](https://insomnia.rest/):** Cliente HTTP utilizado para testar, simular e validar todos os endpoints da API.

---

## ⚙️ Como Executar a Aplicação

### 1️⃣ Pré-requisitos
Antes de começar, garanta que você possui instalado na sua máquina:
* **Node.js** (versão 18 ou superior)
* **npm** (gerenciador de pacotes)

### 2️⃣ Passo a Passo de Instalação e Execução

1. Acesse a pasta do projeto no seu terminal:
   ```bash
   cd aula08-09-metodo-get-post-patch-delete