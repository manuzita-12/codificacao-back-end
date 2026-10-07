# Aula 14: Servidor Edge Runtime (Vercel)

Projeto desenvolvido para demonstrar a criação e o funcionamento de uma **Serverless API Route** executada na borda da rede (**Edge Network**) utilizando a plataforma da Vercel.

---

## 📌 Conteúdo da Aula

Nesta aula foi abordado o conceito de **Edge Computing** e **Edge Functions**. Diferente das funções Serverless tradicionais ou servidores Node.js comuns, as Edge Functions são executadas em servidores distribuídos geograficamente mais próximos do usuário final, reduzindo a latência das requisições.

Na prática, foi desenvolvido o endpoint `/api/hora-servidor` para retornar dados em formato JSON com o horário do servidor, a região de execução e o tempo de processamento.

---

## 🛠️ Ferramentas e Tecnologias Utilizadas

- **Node.js / npm:** Gerenciamento de pacotes e inicialização do projeto (`npm init -y`).
- **TypeScript (`.ts`):** Linguagem utilizada no desenvolvimento da função handler.
- **Vercel CLI / Vercel SDK:** Pacote `vercel` instalado no projeto para habilitar e rodar o ambiente de desenvolvimento local.
- **Vercel Edge Runtime:** Configuração do ambiente de execução na borda (`export const config = { runtime: 'edge' }`).
- **Web APIs Nativas (`Fetch API / Request / Response`):** Interfaces padrões da Web para manipular requisições e respostas HTTP.
- **VS Code:** Editor de código-fonte.
- **Thunder Client:** Extensão do VS Code utilizada para testar e validar o endpoint HTTP.

---

## 📂 Estrutura do Projeto

```text
a14-servidor-edge-runtime-vercel/
├── api/
│   └── hora-servidor.ts
├── package.json
└── README.md

## 📋 Descrição Detalhada das Etapas Realizadas

### 1. Criação de Conta e Configuração da Vercel CLI
1. Criou-se/vinculou-se uma conta na plataforma da **Vercel**.
2. Instalou-se a **Vercel CLI** no computador.
3. No terminal do VS Code, dentro do diretório `aula14-servidor-edge-runtime-vercel`, foi executado o processo de inicialização do projeto
   * Vinculação com o time/usuário: `batatinha1`.
   * Configuração sem framework específico (*No framework detected*).
   * Criação do projeto na Vercel.

---

### 2. Como Executar o Projeto Localmente

Para rodar a aplicação e simular o ambiente do Edge Runtime na máquina local, siga os passos abaixo:

1. Abra o terminal no diretório raiz do projeto (`aula14-servidor-edge-runtime-vercel`)[span_4](start_span)[span_4](end_span).
2. Inicie o servidor de desenvolvimento da Vercel executando:
   ```bash
   vercel dev