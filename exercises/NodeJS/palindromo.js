function checkpalindromo(word) {
    var contrario = "";
    for (var i = word.length - 1; i >= 0; i--)
        contrario += word[i];
    return word === contrario;
}

module.exports={checkpalindromo}