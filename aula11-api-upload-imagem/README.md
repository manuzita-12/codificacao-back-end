# Aula 11: API de Upload de Imagem (NestJS)

Nesta aula, foi desenvolvida uma API REST em **NestJS** focada no upload, validação e armazenamento de arquivos de imagem no servidor, além de disponibilizar acesso público às imagens através de rotas para arquivos estáticos.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **Node.js** — Ambiente de execução JavaScript no servidor.
* **NestJS (`@nestjs/core`, `@nestjs/common`)** — Framework Node.js para construção de aplicações backend escaláveis.
* **Express & `@nestjs/platform-express`** — Adaptador HTTP utilizado pelo NestJS para gerenciar requisições e servir arquivos estáticos.
* **Multer** — Middleware para manipulação de dados `multipart/form-data`, utilizado no processamento de uploads.
* **UUID (`uuid`)** — Biblioteca para geração de identificadores únicos universais (v4) para renomear os arquivos enviados.
* **Path (Módulo Nativo do Node.js)** — Utilizado para manipulação de caminhos de arquivos e extração de extensões (`extname`, `join`).
* **TypeScript** — Linguagem principal utilizada no projeto para tipagem estática e segurança do código.
* **VS Code** — Editor de código-fonte utilizado para o desenvolvimento.

---

## 📚 Conteúdo da Aula

### 1. Controlador de Imagem (`imagem.controller.ts`)
Gerencia a rota de upload (`POST /imagem/upload`) configurada com o interceptador `FileInterceptor` do Multer:

* **Armazenamento no Disco (`diskStorage`):**
  * **Diretório:** Define a pasta `./uploads` na raiz do projeto como local de destino dos arquivos (criada automaticamente na primeira requisição aceita).
  * **Nomenclatura (`filename`):** Substitui o nome original por um código **UUID v4** mantendo a extensão original (`extname`), evitando duplicidade de nomes.
* **Validação e Limites:**
  * **Tamanho do Arquivo (`limits`):** Restringe o tamanho máximo do upload para **2 MB** ($2 \times 1024 \times 1024$ bytes). Exceder este limite dispara erro `413 Payload Too Large`.
  * **Filtro de Formatos (`fileFilter`):** Permite apenas arquivos com extensões `jpg`, `jpeg`, `png`, `gif` ou `webp`. Formatos não permitidos retornam erro `400 Bad Request`.
* **Resposta da API:** Retorna um objeto JSON contendo o nome do arquivo, seu tamanho em bytes e a URL pública para acesso ao recurso (`http://localhost:3000/api/uploads/{filename}`).

### 2. Ativos Estáticos (`main.ts`)
* Configura a aplicação com o adaptador `<NestExpressApplication>`.
* Utiliza o método `app.useStaticAssets()` com a função `join(__dirname, '..', 'uploads')` para mapear a pasta de uploads do disco.
* Define o prefixo `'api/uploads/'` para disponibilizar o acesso público direto aos arquivos no navegador.

### 3. Módulos (`imagem.module.ts` e `app.module.ts`)
* Configuração e registro do `ImagemController` nos módulos da aplicação para estruturação da arquitetura em módulos do NestJS.

---

## 🧪 Validação e Testes Práticos (Execução)

Os testes de requisição foram realizados via cliente API (Insomnia/Postman) para verificar as regras de negócio e validações configuradas no backend:

1. **Teste 1 — Formato de Arquivo Invalido (`400 Bad Request`):**
   * **Descrição:** Envio de arquivo com formato não permitido pelo `fileFilter` (ex: PDF ou TXT).
   * **Resultado:** A requisição foi rejeitada imediatamente sem realizar o salvamento no disco.

2. **Teste 2 — Upload Bem-Sucedido e Criação do Diretório (`201 Created`):**
   * **Descrição:** Envio da imagem dentro do tamanho e formato aceito (`validacao 3 (1).jpg`).
   * **Resultado:** O arquivo foi aceito e salvo com sucesso. O NestJS gerou automaticamente a pasta `/uploads` no diretório do projeto e salvou a imagem renomeada com um UUID único (`9680a2e9-2427-4f54-9e40-5351540cb0b0...jpg`).

3. **Teste 3 — Tamanho Excedido (`413 Payload Too Large`):**
   * **Descrição:** Envio da imagem com tamanho superior ao limite configurado de 2 MB.
   * **Resultado:** A requisição foi bloqueada pela validação de limite (`limits: { fileSize: 2 * 1024 * 1024 }`), retornando a seguinte resposta JSON:
     ```json
     {
       "message": "File too large",
       "error": "Payload Too Large",
       "statusCode": 413
     }
     ```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* **Node.js** (versão 18+ recomendada)
* Gerenciador de pacotes **npm** ou **yarn**

### Passo a Passo

1. **Acessar a pasta do projeto:**
   ```bash
   cd aula11-api-upload-imagem