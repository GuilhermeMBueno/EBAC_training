
// Código escrito através de javaScript Puro
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function(){
//         // AJAX - é um Asynchronous JavaScript adn XML
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`; // https://viacep.com.br/ws/"AQUI VAI O CEP"/json

//         xhttp.open('GET', endpoint);
//         xhttp.send();
        
//     })
// })


$(document).ready(function() {

    // Adicionando uma maskara ao projeto no campo "id: CEP"
    $('#cep').mask('00000-000');

   $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val(); //Aqui esta sendo capturado o valor inserido no campo "id: CEP"
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;  //Este é o site onde ele irá buscar o endereço e retorna um Json
        const botao = $(this);

        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta) {
            
            // Aqui estamos coletando todas as informações da API e armazenando em variaveis
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;  //Aqui pega tudo e "escreve" em 1 linha.

            // Aqui foi capturado o input do endereço HTML e inserindo os valores no HTML
            $('#endereco').val(endereco)

            setTimeout(function(){
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 100);

        });
   }) 
})