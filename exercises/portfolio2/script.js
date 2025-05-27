function check() {
    const date = new Date();
    const year = date.getFullYear();
    const txtyear = document.getElementById("txtyear");
    const res = document.querySelector('div#res');

    // Limpa resultados anteriores
    res.innerHTML = '';

    if (txtyear.value.length == 0 || Number(txtyear.value) > year) {
        window.alert("Please, check your input!");
    } else {
        const fsex = document.getElementsByName('gendersex');
        const age = year - Number(txtyear.value);
        let gender = '';
        let img = document.createElement('img');
        
        // Configurações padrão da imagem
        img.style.width = '150px'; // Tamanho pequeno
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.style.marginTop = '15px';
        img.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

        if (fsex[0].checked) {
            gender = "male";
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'images/babyman.jpg');
                img.setAttribute('alt', 'Baby boy');
            } else if (age < 21) {
                img.setAttribute('src', 'images/teenagerboy.jpg');
                img.setAttribute('alt', 'Teenager');
            } else if (age < 50) {
                img.setAttribute('src', 'images/adultman.jpg');
                img.setAttribute('alt', 'Man');
            } else {
                img.setAttribute('src', 'images/oldman.jpg');
                img.setAttribute('alt', 'Old man');
            }
        } else if (fsex[1].checked) {
            gender = "female";
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'images/babygirl.jpg');
                img.setAttribute('alt', 'Baby girl');
            } else if (age < 21) {
                img.setAttribute('src', 'images/teenagergirl.jpg');
                img.setAttribute('alt', 'Teenager girl');
            } else if (age < 50) {
                img.setAttribute('src', 'images/adultwoman.jpg');
                img.setAttribute('alt', 'Woman');
            } else {
                img.setAttribute('src', 'images/oldwoman.jpg');
                img.setAttribute('alt', 'Old woman');
            }
        }
        
        // Criando elemento de resultado
        const resultText = document.createElement('p');
        resultText.textContent = `We identified ${gender} with ${age} years old.`;
        resultText.style.fontWeight = 'bold';
        resultText.style.fontSize = '1.1rem';
        resultText.style.marginBottom = '10px';

        // Adicionando elementos ao DOM
        res.style.textAlign = 'center';
        res.appendChild(resultText);
        res.appendChild(img);
    }
}