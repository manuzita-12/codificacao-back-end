# Aula 15: Tratamento de Erros, Status Codes e Logs no NestJS

Este projeto foi desenvolvido com o objetivo de praticar o tratamento de erros HTTP, validação de parâmetros e a implementação de logs com o framework NestJS.

---

## 🛠️ Ferramentas e Tecnologias Utilizadas

* **Node.js** - Ambiente de execução do JavaScript no servidor.
* **TypeScript** - Linguagem utilizada para tipagem estática e maior segurança no código.
* **NestJS** - Framework progressivo Node.js para criação de aplicações do lado do servidor
  * `@nestjs/common` (`Logger`, `BadRequestException`, `NotFoundException`, `Controller`, `Get`, `Param`)
* **VS Code** - Editor de código-fonte.
* **Client REST (ex: Thunder Client)** - Para realização e validação de requisições HTTP.

---

## 📋 Resumo das Validações Realizadas

Durante a aula, foram testados e validados 5 cenários diferentes na aplicação:

1. **Validação 1 (Estrutura Básica):** A aplicação NestJS foi configurada e executada corretamente com o módulo `AppModule`, sem a necessidade de criar pastas adicionais na estrutura inicial.
2. **Validação 2 (Erro 400 - Bad Request):** Envio de um ID não numérico (ex: `GET /produtos/abcde`). A aplicação intercepta a entrada inválida, emite um aviso no terminal e retorna o status `400 Bad Request` com a mensagem `"O ID do produto deve ser um número inteiro."`
3. **Validação 3 (Erro 404 - Not Found):** Busca por um produto cujo ID não existe no sistema (ex: `GET /produtos/6` antes de cadastrar ou `GET /produtos/9`). A aplicação exibe o aviso no terminal e retorna o status `404 Not Found`.
4. **Validação 4 (Busca por ID Existente - Status 200 OK):** Requisição realizada com um ID válido e registado (ex: `GET /produtos/3`), retornando as informações do produto correto ("Macarrão Nissan").
5. **Validação 5 (Registo e Consulta de Novo Produto):** Adição de um novo produto no serviço (`ProdutosService`) e verificação imediata através da busca por ID (`GET /produtos/6`), obtendo o novo item registado ("Óleo Soya") com resposta `200 OK`.

---

## 🖥️ Logs no Terminal

A aplicação utiliza a classe `Logger` nativa do NestJS para registrar eventos importantes e avisos no terminal durante a execução:

* Ao tentar procurar com ID inválido: `WARN [ProdutosController] Tentativa de buscar com ID abcde não numérico.`
* Ao procurar por produto não existente: `WARN [ProdutosController] Produto com ID 6 não localizado.`

---

## 🚀 Como Executar o Projeto

1. Instale as dependências da aplicação:
   
```bash
npm install