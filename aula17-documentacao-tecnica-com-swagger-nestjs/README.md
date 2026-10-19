# Aula 17 — Documentação Técnica com Swagger (NestJS)

## Objetivo

Implementar a documentação técnica de uma API de produtos utilizando Swagger no NestJS, facilitando a visualização, a compreensão e a realização de testes dos endpoints diretamente pelo navegador.

## Conteúdo Desenvolvido

* Instalação e configuração do Swagger no projeto NestJS.
* Criação da documentação da API com título, descrição, versão e categoria dos endpoints.
* Configuração de autenticação Bearer na documentação.
* Criação do DTO `CriarProdutoDto` para definir os dados de entrada de um produto.
* Utilização dos decoradores `@ApiProperty`, `@ApiTags`, `@ApiOperation` e `@ApiResponse` para documentar os campos, as operações e as respostas da API.
* Implementação de uma rota POST `/Produtos` para cadastrar produtos.
* Testes de requisições válidas e inválidas, verificando o retorno da API.

## Ferramentas e Tecnologias

* **Node.js:** ambiente de execução do JavaScript.
* **NestJS:** framework utilizado para desenvolver a API.
* **TypeScript:** linguagem utilizada na implementação.
* **Swagger / OpenAPI:** documentação interativa da API.
* **@nestjs/swagger:** biblioteca utilizada para integrar o Swagger ao NestJS.
* **NPM:** gerenciamento de pacotes e dependências.
* **Visual Studio Code:** editor de código.
* **Git e GitHub:** versionamento e armazenamento do projeto.

## Como Executar

### 1. Instalar as dependências

Na pasta do projeto, execute:

```bash
npm install
```

### 2. Instalar o Swagger

```bash
npm install --save @nestjs/swagger
```

### 3. Iniciar a aplicação

```bash
npm run start:dev
```

### 4. Acessar a documentação

Com a aplicação em execução, abra o navegador e acesse:

http://localhost:3000/docs

### 5. Testar a API

No Swagger, localize a rota `POST /Produtos`, clique em **Try it out** e envie um JSON válido, por exemplo:

```json
{
  "nome": "Teclado Mecânico Redragon xyz",
  "preco": 199.99,
  "categoria": "Periférico"
}
```

Uma requisição bem-sucedida retorna o status **201 — Created**, com os dados do produto cadastrado.

Para testar uma requisição inválida, envie um JSON com a sintaxe incorreta, como uma vírgula sobrando ou uma propriedade sem aspas. A API poderá retornar **400 — Bad Request**.

**Observação:** um JSON malformado testa a validade da sintaxe da requisição. Para testar dados inválidos, como preço negativo ou campos obrigatórios ausentes, é necessário configurar validações no DTO, por exemplo, com `class-validator` e `ValidationPipe`.

## Resultado

Ao final da aula, foi criada uma documentação interativa para a API de produtos, permitindo visualizar os endpoints, consultar os dados esperados e executar testes de requisições diretamente pelo Swagger.