# Aula 16 — Validação de Schemas com Zod no NestJS

## 📌 Conteúdo

Nesta aula, desenvolvi um sistema de validação de dados utilizando a biblioteca Zod integrada ao NestJS. O objetivo foi garantir que os dados enviados nas requisições HTTP atendam aos critérios definidos antes de serem processados pela aplicação.

Foram desenvolvidos:

* **Schema de validação:** definição das regras para os campos nome, e-mail, idade e departamento.
* **Pipe de validação personalizado:** utilização do `ZodValidationPipe` para validar os dados recebidos no corpo das requisições.
* **Tratamento de erros:** retorno de erros HTTP 400 (Bad Request) quando os dados são inválidos, com indicação do campo e da mensagem correspondente.
* **Controller de colaboradores:** criação da rota `POST /colaboradores` para cadastrar colaboradores e retornar os dados validados.
* **Testes de validação:** verificação de dados válidos e inválidos para confirmar o funcionamento das regras.

## 🛠️ Ferramentas e tecnologias utilizadas

* **TypeScript:** linguagem utilizada no desenvolvimento.
* **Node.js:** ambiente de execução do JavaScript.
* **NestJS:** framework utilizado para estruturar a aplicação backend.
* **Zod:** biblioteca utilizada para definir schemas e validar dados.
* **NPM:** gerenciamento de dependências e execução de scripts.
* **Visual Studio Code:** editor de código-fonte.
* **Terminal:** execução da aplicação e acompanhamento da compilação.

## ▶️ Como executar

1. Abra o terminal na pasta do projeto.

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie a aplicação em modo de desenvolvimento:

   ```bash
   npm run start:dev
   ```

4. Envie uma requisição `POST` para:

   ```text
   http://localhost:3000/colaboradores
   ```

5. Utilize o seguinte JSON para testar uma requisição válida:

   ```json
   {
     "nome": "Maria Silva",
     "email": "maria@email.com",
     "idade": 25,
     "departamento": "TI"
   }
   ```

6. Para testar a validação, altere os valores, por exemplo, informando um e-mail inválido ou uma idade inferior a 18 anos. A aplicação deverá retornar um erro HTTP 400 com os detalhes da validação.

**Observação:** os comandos devem ser executados na pasta que contém o `package.json` do projeto. A aplicação utiliza a porta 3000 por padrão, salvo configuração diferente pela variável `PORT`.

## 🎯 Objetivo da aula

Aprender a implementar validações de dados no backend com Zod e NestJS, garantindo maior consistência das informações recebidas e melhor tratamento de requisições inválidas.