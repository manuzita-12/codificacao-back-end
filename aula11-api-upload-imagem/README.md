# Aula 11: API de Upload de Imagem (NestJS)

Nesta aula, foi desenvolvida uma API REST em **NestJS** focada no upload, validação e armazenamento de arquivos de imagem no servidor, além de disponibilizar acesso público às imagens através de rotas para arquivos estáticos.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Node.js** — Ambiente de execução JavaScript no servidor.
* **NestJS (`@nestjs/core`, `@nestjs/common`)** — Framework Node.js para construção de aplicações backend escaláveis.
* **Express & `@nestjs/platform-express`** — Adaptador HTTP utilizado pelo NestJS para gerenciar requisições e servir arquivos estáticos.
* **Multer** — Middleware para manipulação de dados `multipart/form-data`, utilizado no processamento de uploads.
* **UUID (`uuid`)** — Biblioteca para geração de identificadores únicos universais (versão v4) para renomear os arquivos enviados.
* **Path (Módulo Nativo do Node.js)** — Utilizado para manipulação de caminhos de arquivos e extração de extensões (`extname`, `join`).
* **TypeScript** — Linguagem principal utilizada no projeto para tipagem estática e segurança do código.
* **VS Code** — Editor de código-fonte utilizado para o desenvolvimento.

---

## 📚 Conteúdo da Aula

### 1. Controlador de Imagem (`imagem.controller.ts`)
Gerencia a rota de upload (`POST /imagem/upload`) configurada com o interceptador `FileInterceptor` do Multer:

* **Armazenamento no Disco (`diskStorage`):**
  * **Diretório:** Define a pasta `./uploads` na raiz do projeto como local de destino dos arquivos.
  * **Nomenclatura (`filename`):** Substitui o nome original por um código **UUID v4** mantendo a extensão original (`extname`), evitando duplicidade de nomes.
* **Validação e Limites:**
  * **Tamanho do Arquivo (`limits`):** Restringe o tamanho máximo do upload para **2 MB** ($2 \times 1024 \times 1024$ bytes).
  * **Filtro de Formatos (`fileFilter`):** Permite apenas arquivos com extensões `jpg`, `jpeg`, `png`, `gif` ou `webp`. Formatos não permitidos retornam erro do tipo `BadRequestException`.
* **Resposta da API:** Retorna um objeto JSON contendo o nome do arquivo, seu tamanho em bytes e a URL pública para acesso ao recurso (`http://localhost:3000/api/uploads/{filename}`).

### 2. Ativos Estáticos (`main.ts`)
* Configura a aplicação com o adaptador `<NestExpressApplication>`.
* Utiliza o método `app.useStaticAssets()` com a função `join(__dirname, '..', 'uploads')` para mapear a pasta de uploads do disco.
* Define o prefixo `'api/uploads/'` para disponibilizar o acesso público direto aos arquivos no navegador.

### 3. Módulos (`imagem.module.ts` e `app.module.ts`)
* Configuração e registro do `ImagemController` nos módulos da aplicação para estruturação da arquitetura em módulos do NestJS.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* **Node.js** (versão 18+ recomendada)
* Gerenciador de pacotes **npm** ou **yarn**

### Passo a Passo

1. **Acessar a pasta do projeto:**
   ```bash
   cd aula11-api-upload-imagem