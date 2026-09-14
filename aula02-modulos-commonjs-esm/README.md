# Aula 02 - Módulos CommonJS e ESM

Nesta aula do projeto **aula02-modulos-commonjs-esm**, desenvolvi um sistema de persistência de logs em Node.js utilizando **ES Modules (ESM)** para a estruturação modular do código e a manipulação do sistema de arquivos.

---

### 1. Habilitação de ES Modules (`package.json`)
* Configurou a propriedade `"type": "module"` no arquivo `package.json`.
* Essa definição habilita o suporte nativo às instruções `import` e `export`, substituindo o padrão CommonJS (`require`).

---

### 2. Módulo de Formatação (`utilitario.js`)
* Criou e exportou a função `formateLog(mensagem)`.
* Utilizou métodos do objeto `Date`:
  * `Date().toISOString()` para extrair a data atual no formato padrão.
  * `toLocaleTimeString()` para capturar a hora local.
* Retornou a mensagem formatada no padrão: `[YYYY-MM-DD - HH:MM:SS]: mensagem`.

---

### 3. Automação e Manipulação de Arquivos (`index.js`)
* Importou os módulos nativos do Node.js (`fs/promises`, `path`, `url`) e a função utilitária local.
* Recriou as variáveis globais de caminho (`__filename` e `__dirname`) utilizando `fileURLToPath(import.meta.url)` e `path.dirname()`, necessárias ao trabalhar com ESM.
* Implementou a função assíncrona `salvarLogSistema(mensagemLog)` composta por:
  * Resolução de diretórios com `path.join`, definindo a pasta `Logs` e o arquivo `syslog.log`.
  * Criação automática do diretório com `fs.mkdir(pastaLog, { recursive: true })`.
  * Anexo contínuo dos registros com `fs.appendFile`.
  * Tratamento de exceções utilizando a estrutura `try/catch`.
* Chamou a função para registrar os eventos de inicialização do servidor e de conexão com o banco de dados.

---

### 4. Persistência de Dados (`syslog.log`)
* Executou a aplicação no terminal e validou a criação do diretório e arquivo de log.
* Confirmou a escrita correta das mensagens com seus respectivos carimbos de data e hora no arquivo `syslog.log`.