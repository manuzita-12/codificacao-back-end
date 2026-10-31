# Aula 02: Modelagem de Documentos em Banco NoSQL

Repositório contendo os exercícios práticos desenvolvidos durante a **Aula 02**, com foco na modelagem de dados orientada a documentos (JSON) para bancos de dados NoSQL (como o MongoDB).

## 📋 Resumo dos Documentos Criados

### 1. `aluno-escola.json`
Estruturação dos dados cadastrais e acadêmicos de um aluno, aplicando o conceito de *embedding* (aninhamento) para dados relacionados.
* **Dados Pessoais:** `nome`, `nomeSocial`, `matricula`, `dataNascimento` e `curso`.
* **Disciplinas (Array de Objetos):** Relação das disciplinas cursadas com as respetivas notas.
* **Endereço (Objeto Aninhado):** Centralização dos dados de localização residencial do aluno.

---

### 2. `post-rede-social.json`
Modelagem de uma publicação de rede social, agrupando as interações dos utilizadores diretamente no documento principal.
* **Informações Principais:** `autor`, `dataPostagem` e o conteúdo textual (`texto`).
* **Curtidas (Array de Objetos):** Registo dos utilizadores que reagiram ao post e o tipo de reação.
* **Comentários (Array de Objetos):** Lista com os comentários e os seus respetivos autores.

---

### 3. `produto-loja-notebook.json`
Estrutura de catálogo de produto para e-commerce, organizando detalhes técnicos e etiquetas de pesquisa.
* **Atributos Gerais:** `nome`, `categoria`, `preco` e quantidade em `estoque`.
* **Especificações Técnicas (Objeto Aninhado):** Detalhes de hardware do produto (`ram`, `processador`, `armazenamento`).
* **Tags (Array de Strings):** Palavras-chave para otimização de procuras e filtragens no sistema.

---

## 💡 Conceitos Aplicados
* **Desnormalização de Dados:** Agrupamento de informações relacionadas num único documento para otimizar as leituras.
* **Subdocumentos (Embedding):** Utilização de objetos aninhados para estruturar dados compostos.
* **Arrays de Documentos:** Listagem de sub-elementos como interações de utilizadores e disciplinas.