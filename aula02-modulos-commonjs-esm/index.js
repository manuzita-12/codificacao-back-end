import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { formateLog } from './utilitario.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function salvarLogSistema(mensagemLog) {
    try{
      const pastaLog = path.join(__dirname, 'Logs');
      const arquivoLog = path.join(pastaLog, 'syslog.log');

      await fs.mkdir(pastaLog, {recursive:true});
      const registro = formateLog(mensagemLog);
      await fs.appendFile(arquivoLog, registro, 'utf-8');

      console.log('Log registrado com sucesso...');
    }catch(erro){
        console.error('Erro ao registrar log: ', erro);
    }
}

salvarLogSistema('Inicialização do servidor concluída!\n');
salvarLogSistema('Conexão com banco de dados estabelecida!\n');