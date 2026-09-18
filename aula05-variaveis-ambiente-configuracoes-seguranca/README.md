# 📚 Aula 05: Variáveis de Ambiente, Configurações e Segurança em Node.js

nesta aula, abordamos a importância do gerenciamento seguro de configurações sensíveis em aplicações Node.js, utilizando a biblioteca `dotenv` e integrando boas práticas com o Git.

---

## 🎯 Objetivos da Aula

- **Isolamento de Credenciais:** Compreender por que dados sensíveis (chaves de API, URLs de banco de dados, portas de serviço) não devem ficar expostos diretamente no código-fonte.
- **Uso do `dotenv`:** Instalar e configurar o pacote `dotenv` utilizando a sintaxe de ES Modules (`import`).
- **Arquivos de Ambiente:**
  - `.env`: Arquivo local contendo os valores reais das variáveis de ambiente.
  - `.env.example`: Modelo descritivo com as chaves necessárias (sem os dados sensíveis) para orientar outros desenvolvedores.
- **Validação de Variáveis Críticas:** Implementar verificações no código (`process.env`) para garantir que a aplicação só inicie se todas as variáveis essenciais estiverem definidas.
- **Segurança com `.gitignore`:** Configurar o arquivo `.gitignore` para impedir que dados sensíveis (`.env`), logs e dependências (`node_modules`) sejam enviados ao controle de versão.

---

## 🛠️ Arquivos do Projeto

### 1. `package.json`
Define o tipo do projeto como módulo ES (`"type": "module"`) e lista as dependências necessárias (ex: `dotenv`).

### 2. `app.js`
Código principal responsável por:
1. Carregar as variáveis com `dotenv.config()`.
2. Validar a presença de chaves obrigatórias (como `API_KEY_PAGAMENTO`).
3. Interromper a execução (`process.exit(1)`) caso alguma chave essencial esteja ausente.
4. Inicializar o serviço utilizando as configurações carregadas.

### 3. `.env` *(Não versionado)*
Armazena os valores reais utilizados em ambiente de desenvolvimento local:
```env
PORT=3000
API_KEY_PAGAMENTO=snk_live_99887766554433221100
DATABASE_URL=mongodb://localhost:27017/meu_banco