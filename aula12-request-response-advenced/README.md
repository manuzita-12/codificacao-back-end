# Aula 12 - Request Response Advanced (NestJS)

Esta aplicação foi desenvolvida durante a aula **Request & Response Advanced** utilizando o framework **NestJS**. O objetivo principal da aula foi explorar a manipulação avançada de requisições e respostas HTTP, incluindo o consumo de cabeçalhos (*headers*) customizados, manipulação direta da resposta HTTP (`@Res()`), definição de *status codes* e criação de fluxos de autenticação simples baseados em *API Key*.

---

## 📚 Conteúdo Desenvolvido

1. **Estrutura Modular e Injeção de Dependências:**
   - **`AppModule` (`app.module.ts`):** Módulo raiz responsável por registrar os controllers (`AppController`, `SegurancaController`) e serviços (`AppService`)[span_0](start_span)[span_0](end_span).
   - **`AppService` (`app.service.ts`):** Provedor contendo a regra de negócio para checagem do status do servidor (`getHello()`)[span_1](start_span)[span_1](end_span).
   - **`AppController` (`app.controller.ts`):** Controller mapeado na rota `/status` para verificar a disponibilidade da API[span_2](start_span)[span_2](end_span).

2. **Manipulação Avançada de Headers e Autenticação:**
   - **`SegurancaController` (`seguranca.controller.ts`):** Controller responsável por gerenciar a rota protegida `/secret`[span_3](start_span)[span_3](end_span).
   - **Leitura de Headers:** Uso do decorator `@Headers('y-api-key')` para capturar a chave de segurança enviada pelo cliente[span_4](start_span)[span_4](end_span).
   - **Resposta Personalizada com `@Res()`:** Manipulação direta do objeto de resposta do Express para definir status HTTP e cabeçalhos customizados[span_5](start_span)[span_5](end_span):
     - **Sucesso (`200 OK`):** Retornado caso `y-api-key === 'FULLSTACK-2026'`[span_6](start_span)[span_6](end_span). Define o cabeçalho `y-auth-status: verificado` e retorna um payload JSON confirmando o acesso com *timestamp*[span_7](start_span)[span_7](end_span)[span_8](start_span)[span_8](end_span).
     - **Acesso Negado (`403 Forbidden`):** Retornado caso a chave esteja incorreta ou ausente[span_9](start_span)[span_9](end_span). Retorna a mensagem de erro com status `403` e o motivo do bloqueio[span_10](start_span)[span_10](end_span)[span_11](start_span)[span_11](end_span).

---

## 🛠️️ Ferramentas e Tecnologias

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript/TypeScript[span_12](start_span)[span_12](end_span)[span_13](start_span)[span_13](end_span).
- **[NestJS](https://nestjs.com/):** Framework para construção de aplicações backend eficientes e escaláveis[span_14](start_span)[span_14](end_span)[span_15](start_span)[span_15](end_span).
- **[Express](https://expressjs.com/):** Framework web utilizado internamente pelo NestJS para manipulação de rotas e respostas HTTP[span_16](start_span)[span_16](end_span).
- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação tipada[span_17](start_span)[span_17](end_span)[span_18](start_span)[span_18](end_span).
- **[Insomnia](https://insomnia.rest/):** Cliente HTTP utilizado para testar os endpoints da API com headers customizados[span_19](start_span)[span_19](end_span)[span_20](start_span)[span_20](end_span).
- **VS Code:** Editor de código-fonte.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js** instalado (versão 18 ou superior recomendada).
- **npm** ou **yarn** instalado.

### Passo a Passo

1. **Instale as dependências:**
   ```bash
   npm install