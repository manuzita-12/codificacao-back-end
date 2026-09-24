# 🎮 NestJS - Aula 10: Rotas Dinâmicas

Projeto desenvolvido durante a **Aula 10**, explorando a criação de rotas dinâmicas, captura e validação de parâmetros de URL (`@Param` e `ParseIntPipe`), além do tratamento de exceções HTTP (`NotFoundException`) no **NestJS**.

---

## 📌 Funcionalidades

- 🟢 **Status da Aplicação:** Endpoint para verificação de status do servidor.
- 🎯 **Busca Dinâmica de Jogos:** Endpoint para consultar dados de um jogo específico através do seu ID na URL.
- 🛑 **Tratamento de Erro (404):** Mensagem de exceção amigável e personalizada quando o recurso não for encontrado.
- ⚙️ **Validação de Tipos:** Conversão e validação automática de parâmetros de URL para números inteiros.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **NestJS** (Framework TypeScript)
- **TypeScript**

---

## 📂 Estrutura de Arquivos Implementada

```text
src/
├── app.controller.ts     # Controller da rota de status (/status)
├── app.module.ts         # Módulo principal agrupando controllers e providers
├── app.service.ts        # Serviço de verificação do status do servidor
├── jogos.controller.ts   # Controller responsável pelas rotas de jogos (/jogos)
└── jogos.service.ts      # Serviço com a lógica de busca e mock de dados dos jogos