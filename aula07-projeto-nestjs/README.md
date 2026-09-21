# Aula 07: Introdução Prática ao NestJS

---

## 🎯 Objetivo
Apresentar a introdução prática ao framework **NestJS**, ensinando como inicializar a estrutura base de um projeto, organizar a arquitetura inicial e alterar as regras de *controllers* e *services* para responder a requisições HTTP personalizadas.

---

## 📚 Conteúdo

### 1. Inicialização e Estrutura do Projeto
- Criação da estrutura de pastas da aplicação (`aula07-projeto-nestjs`).
- Remoção da pasta `.git` interna para evitar repositórios Git aninhados (*submodules*) e manter o controle de versão unificado na raiz da disciplina (`codificacao-back-end`).

### 2. Controladores (*Controllers*)
- Mapeamento e alteração da rota base para `@Controller('status')` no arquivo `app.controller.ts`.
- Associação do método HTTP `GET` para invocar o serviço correspondente.

### 3. Serviços (*Services*)
- Implementação e customização do método `getHello()` no arquivo `app.service.ts`.
- Retorno da mensagem personalizada: `'Servidor Nest.JS Ativo [Aula 07]'`.

---

## 🛠️ Ferramentas e Tecnologias
- **Node.js**: Ambiente de execução JavaScript/TypeScript no lado do servidor.
- **npm**: Gerenciador de pacotes.
- **NestJS CLI**: Interface de linha de comando utilizada para gerar o scaffolding inicial do projeto.
- **TypeScript**: Linguagem fortemente tipada utilizada nativamente pelo NestJS.
- **VS Code**: Editor de código-fonte utilizado durante a aula.
- **Git**: Sistema de controle de versão.

---

## 🚀 Como Executar

1. **Navegar até o diretório da aula:**
   ```bash
   cd aula07-projeto-nestjs