import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoeserros.js';
import {contaPalavras} from './index.js';
import {montaSaidaArquivo} from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program=new Command();

program 
    .version('0.0.1')
    .option('-t,--texto <string>','caminho do texto a ser processado')
    .option('-d,--destino <string>','caminho da pasta onde salvar o arquivo de resultados')
    .action((options)=>{
        const {texto,destino}=options; //desestruturação

        if(!texto|| !destino){
            console.error(chalk.red('erro: favor inserir caminho de origem e destino'))
            program.help();
            return
        }

        const caminhoTexto=path.resolve(texto);
        const caminhoDestino=path.resolve(destino)
        try{
       processaArquivo(caminhoTexto,caminhoDestino);
       console.log(chalk.green('texto processado com sucesso'));
        }catch(erro){
            console.log('ocorreu um erro no processamento',erro);
        }
    })

//const link = process.argv[2]; // String (caminho do arquivo)
//const endereco=process.argv[3];

function processaArquivo(texto,destino){
fs.readFile(texto, 'utf-8', (erro, texto) => {
    if (erro) {
        // Captura o retorno da função e exibe
        const mensagemErro = trataErros(erro); // String (mensagem de erro)
        console.log(mensagemErro); // Agora vai mostrar a mensagem
        return;
    }
    
    try {
        const resultado = contaPalavras(texto); // Objeto {palavra: quantidade}
        criaESalvaArquivo(resultado,destino);
        console.log(resultado); // Exibe o resultado da contagem
    } catch (erroProcessamento) {
        console.log(trataErros(erroProcessamento)); // Trata erros no processamento
    }
});

}



async function criaESalvaArquivo(listaPalavras, endereco){
    const arquivoNovo=`${endereco}/resultado.txt`;
    const textoPalavras=montaSaidaArquivo(listaPalavras);

 fs.promises.writeFile(arquivoNovo,textoPalavras)
 .then(()=>{
   console.log('arquivo criado');
 })
  .catch((erro)=>{
    throw erro 
  })
  .finally(()=>console.log('operação finalizada'))
}

program.parse(process.argv);