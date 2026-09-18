# Aula 04 - Tratamento Global de Exceções

Projeto desenvolvido durante a **Aula 04**, com foco no gerenciamento centralizado e robusto de erros em aplicações web construídas com **Node.js** e **Express**.

---

## 📌 Descrição do Projeto

Esta aula demonstra como capturar e tratar exceções não manipuladas, tanto em nível de processo (`Node.js`) quanto em nível de requisição HTTP (`Express.js`). O objetivo é evitar que a aplicação caia inesperadamente e garantir respostas padronizadas para o cliente.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** (módulos ES - `type: "module"`)
- **Express.js** v5.2.1

---

## 🎯 Conceitos Abordados

1. **Captura de Erros de Processo Global:**
   - `uncaughtException`: Captura de erros síncronos não tratados no escopo global.
   - `unhandledRejection`: Captura de *Promises* rejeitadas sem tratamento `.catch()`.

2. **Rotas de Demonstração (`server.js`):**
   - `GET /sucesso`: Retorna resposta com sucesso.
   - `GET /erro-sincrono`: Simula uma falha de regra de negócio com `throw new Error`.
   - `GET /erro-assincrono`: Simula uma rejeição assíncrona com `Promise.reject`.

3. **Middleware Global de Tratamento de Erros:**
   - Middleware com a assinatura `(err, req, res, next)`.
   - Log detalhado de erros no servidor (`err.stack`).
   - Retorno formatado em JSON com código HTTP apropriado (`status 500` por padrão).

---

## 📁 Estrutura de Arquivos

```text
aula04-tratamento-global-excecoes/
├── node_modules/
├── package.json
├── package-lock.json
├── README.md
└── server.js