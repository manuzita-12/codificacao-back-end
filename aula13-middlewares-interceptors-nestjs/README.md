# 🚀 Aula 13: Middlewares e Interceptors no NestJS

Este projeto exemplifica a criação, configuração e aplicação de **Middlewares** no framework NestJS para interceptação de requisições HTTP, registro de logs (logging) e controle de acesso a rotas administrativas por meio da validação de cabeçalhos (*headers*).

---

## 📌 Conteúdo Abordado

* **Criação do Middleware:** Gerado a estrutura básica do middleware utilizando a CLI do NestJS.
* **Logging de Requisições:** Implementado registro automático do método HTTP e da rota acessada para cada requisição recebida (ex.: `[LOG] Método: GET | Rota: /admin`).
* **Interceptação e Validação de Segurança:**
  * Identificação de tentativas de acesso a rotas restritas que iniciam com `/admin`.
  * Verificação da presença e valor do header customizado `x-user-base: Administrator`.
* **Tratamento de Erros e Controle de Fluxo:**
  * **Acesso Negado (HTTP 403 Forbidden):** Caso o header de autorização não seja enviado ou seja inválido, o middleware interrompe o fluxo e retorna um JSON informativo com a mensagem de erro e a data do registro.
  * **Acesso Permitido (HTTP 200 OK):** Quando as credenciais são válidas ou ao acessar rotas públicas (`/`), a execução prossegue normalmente via `next()` até o manipulador da rota (*Controller*).
* **Registro Global no Módulo:** Configuração do `LoggerMiddleware` dentro do `AppModule` utilizando `NestModule` e a função `consumer.apply().forRoutes('*')`.

---

## 🛠️ Ferramentas e Tecnologias Utilizadas

* **[NestJS](https://nestjs.com/):** Framework Node.js progressivo para construção de aplicações backend eficientes e escaláveis.
* **[TypeScript](https://www.typescriptlang.org/):** Superset JavaScript fortemente tipado.
* **Express (`req`, `res`, `NextFunction`):** Abstração de requisições e respostas HTTP no NestJS.
* **Nest CLI:** Interface de linha de comando utilizada para a criação automática do middleware.
* **Visual Studio Code:** IDE de desenvolvimento.
* **Thunder Client / Postman:** Cliente HTTP utilizado para simular e testar as requisições, headers e códigos de status HTTP (`200 OK` e `403 Forbidden`).

---

## 💻 Comandos de Criação

Para gerar o middleware utilizado nesta aula, foi utilizado o comando da Nest CLI:

```bash
nest g mi logger