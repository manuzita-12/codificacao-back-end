# 🚀 Aulas 08 e 09 — API RESTful com NestJS: Mapeamento dos Métodos HTTP (GET, POST, PATCH e DELETE)

Neste módulo, evoluímos a construção de uma **API RESTful para Gestão de Convidados** utilizando **NestJS**, praticando as operações fundamentais de um CRUD e aplicando boas práticas de arquitetura Back-End.

---

## 📚 Conteúdo das Aulas

### 🔹 Aula 08: Criação e Leitura de Recursos (GET e POST)
* **Arquitetura em Camadas:** Divisão clara de responsabilidades entre Controllers (mapeamento e rotas) e Services (regras de negócio e manipulação de dados).
* **Listagem (`GET /convidados`):** Implementação do método responsável por retornar a lista de convidados cadastrados.
* **Criação de Recursos (`POST /convidados`):** Recebimento dos dados através do corpo da requisição (`@Body()`) utilizando DTOs (*Data Transfer Objects*) para tipagem e validação da entrada.

### 🔹 Aula 09: Atualização Parcial e Remoção (PATCH e DELETE)
* **Evolução do Modelo de Dados:** Inclusão da propriedade `idade` (`number`) na estrutura do convidado e atualização do `CriarConvidadoDto`.
* **Atualização Parcial (`PATCH /convidados/:id`):** Recebimento de parâmetros de rota (`@Param('id')`) e dados do corpo (`@Body('idade')`) para atualizar especificamente a idade de um convidado existente.
* **Remoção (`DELETE /convidados/:id`):** Exclusão de convidados pelo ID utilizando a remoção em memória (`splice()`), configurada com o status HTTP `204 (No Content)`.
* **Tratamento de Exceções HTTP:** Uso do `NotFoundException` para retornar respostas padronizadas quando um ID informado não for localizado na lista.

---

## 🛠️ Ferramentas e Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript no lado do servidor.
* **[NestJS](https://nestjs.com/):** Framework progressivo para construção de aplicações Back-End escaláveis.
* **[TypeScript](https://www.typescriptlang.org/):** Linguagem base para o desenvolvimento com NestJS, garantindo tipagem estática e segurança.
* **[VS Code](https://code.visualstudio.com/):** Editor de código-fonte utilizado.
* **[Insomnia](https://insomnia.rest/):** Cliente HTTP utilizado para testar, validar e simular as requisições para a API.

---

## ⚙️ Como Executar a Aplicação

### 1️⃣ Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.

### 2️⃣ Passo a Passo

1. Acesse o diretório do projeto no terminal:
   ```bash
   cd aula08-09-metodo-get-post-patch-delete