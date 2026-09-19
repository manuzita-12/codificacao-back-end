# 🚀 Aula 06: Servidor Web em Node.js

Nesta aula, exploramos na prática como configurar um projeto em Node.js e criar um servidor web do zero utilizando o módulo nativo `http` e a sintaxe moderna de módulos ECMAScript (**ES Modules**).

---

## 📌 Tópicos Abordados

### 1. Configuração do Projeto (`package.json`)
- Inicialização da estrutura do projeto Node.js.
- Definida a propriedade `"type": "module"` para permitir a utilização da sintaxe nativa de `import/export`.

### 2. Criação do Servidor Web Nativo
- Importação e utilização do módulo nativo `http`.
- Criação do servidor através do método `http.createServer()`.

### 3. Manipulação de Requisições e Roteamento
- Captura do método HTTP e da URL acessada através de `req.method` e `req.url`.
- Implementação de roteamento básico:
  - **Rota `/status`**: Retorna o status HTTP `200` e uma resposta em formato JSON indicando `{ servidorWeb: 'Online' }`.
  - **Tratamento de erro (404)**: Retorna o status HTTP `404` para rotas não registradas, enviando a mensagem `{ erro: 'Página não encontrada!' }`.

### 4. Configuração de Cabeçalhos (Headers) e Segurança
- Definição de um objeto de cabeçalhos padrão (`cabecalhoPadrao`) incluindo:
  - `X-Content-Type-Options: 'nosniff'` (prevenção contra MIME sniffing).
  - `X-Frame-Options: 'DENY'` (proteção contra ataques de clickjacking).
  - `content-type: 'application/json'` (definição do formato de resposta).

### 5. Inicialização do Servidor
- Execução do servidor escutando na porta **`3000`** com mensagens descritivas no console ao iniciar.