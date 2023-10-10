// Aguarda até que a página seja completamente carregada
window.addEventListener('load', function () {
    // Quando a página está completamente carregada, adiciona a classe "loaded" ao body
    document.body.classList.add('loaded');

    // Esconde a tela de transição e mostra o conteúdo principal após um atraso de 2 segundos (2000 milissegundos)
    setTimeout(function () {
        document.getElementById('transicao-screen').style.opacity = 0;
        document.querySelector('.main').style.display = 'block';
    }, 2000); // 2000 ms = 2 segundos
});
