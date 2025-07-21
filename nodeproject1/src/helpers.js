function filtraOcorrencias(palavras) {
    return Object.keys(palavras).filter(chave => palavras[chave] > 1);
}

function montaSaidaArquivo(listaParagrafos) {
    let textoFinal = '';
    
    listaParagrafos.forEach((item) => {
        const duplicadas = filtraOcorrencias(item.palavras).join(', ');
        textoFinal += `palavras duplicadas no parágrafo ${item.paragrafo}: ${duplicadas}\n`;
    });
    
    return textoFinal;
}

export {montaSaidaArquivo};