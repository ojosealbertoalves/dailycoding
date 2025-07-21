export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    
    // Agora retornamos um array de objetos, um para cada parágrafo
    return paragrafos.map((paragrafo, indice) => {
        if (!paragrafo) return { paragrafo: indice + 1, palavras: {} };
        
        const palavras = verificarPalavrasDuplicadas(paragrafo);
        return { paragrafo: indice + 1, palavras };
    });
}
function extraiParagrafos(texto) {
    return texto.toLowerCase()
        .split('\n')
        .map(paragrafo => paragrafo.trim()) // Remove espaços em branco no início/fim
        .filter(paragrafo => paragrafo.length > 0); // Filtra linhas vazias
}

function limpaPalavras(palavra) { // palavra: String
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); // String
}

function verificarPalavrasDuplicadas(texto) { // texto: String
    const listaPalavras = texto.split(' '); // Array de strings
    const resultado = {}; // Objeto {palavra: quantidade}
    
    listaPalavras.forEach(palavra => { // palavra: String
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra); // String
            if (palavraLimpa) { // Verifica se ainda há algo após a limpeza
                resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; // Atualiza contagem
            }
        }
    });
    
    return resultado; // Objeto {palavra: quantidade}
}