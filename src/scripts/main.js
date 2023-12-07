document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('changeColorBtn');
    
    button.addEventListener('click', function () {
        const body = document.body;
        const currentColor = getComputedStyle(body).backgroundColor;

        // Altera a cor de fundo para uma cor aleatória
        body.style.backgroundColor = getRandomColor();
    });

    // Gera uma cor aleatória em formato hexadecimal
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});