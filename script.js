const dogImage = document.getElementById('dogImage');
const generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
            dogImage.alt = 'Imagem de um cachorro';
        })
        .catch(error => console.error('Erro ao carregar a imagem:', error));
});
