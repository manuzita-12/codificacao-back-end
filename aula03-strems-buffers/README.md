# Aula 03 - Streams e Buffers no Node.js

Esta aula abordou o uso de **Streams** e **Buffers** para processar volumes massivos de dados com alto desempenho e baixo consumo de memória RAM.

---

## 🚀 O que foi desenvolvido

### 1. Geração de Logs em Larga Escala (`gerarLogGigante.js`)
* Criou-se um script para simular um arquivo extenso de logs chamado `servidor.log`.
* Utilizou-se `fs.createWriteStream` para gravar **400.000 linhas** de logs em formato stream sem sobrecarregar a memória.
* A cada 7 linhas, o tipo do log alterna entre `ERROR` e `INFO`.

### 2. Processamento e Filtragem por Demanda (`processarLogs.js`)
* Leitura do arquivo `servidor.log` linha por linha utilizando o módulo `readline` em conjunto com `fs.createReadStream`.
* Filtragem apenas das linhas que contêm a mensagem `'ERROR'`.
* Escrita dos resultados filtrados no arquivo `apenas_erros.log` através de `fs.createWriteStream`.
* Monitoramento em tempo real do uso de memória (RSS e Heap) durante o processamento utilizando a função `exibirConsumoMemoria`.

---

## 🛠️ Estrutura do Projeto

* `gerarLogGigante.js`: Script responsável por gerar o arquivo de logs massivo.
* `processarLogs.js`: Script assíncrono que lê, filtra e salva os erros em stream.
* `servidor.log`: Arquivo gerado contendo 400.000 linhas de logs simulados.
* `apenas_erros.log`: Arquivo final filtrado contendo apenas as 57.143 linhas marcadas como `ERROR`.
* `package.json`: Configuração do projeto configurado como módulo ES (`"type": "module"`).

---

## 📊 Resultados e Performance

* **Total de linhas de erros filtradas:** 57.143 linhas.
* **Eficiência:** O uso de memória Heap manteve-se baixo (aproximadamente ~4.97 MB a ~17.73 MB), demonstrando a eficiência das Streams no Node.js para lidar com grandes arquivos de dados sem estouro de memória (*Out of Memory*).