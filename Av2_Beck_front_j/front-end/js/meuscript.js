$(function() { // quando o documento estiver pronto/carregado
    
    $.ajax({
        url: 'http://localhost:5000/listar_animes',
        method: 'GET',
        dataType: 'json', // os dados são recebidos no formato json
        success: listar, // chama a função listar para processar o resultado
        error: function() {
            alert("erro ao ler dados, verifique o backend");
        }
    });

    function listar (animes) {
        // percorrer a lista de animes retornadas; 
        for (var i in animes) { //i vale a posição no vetor
            lin = '<tr>' + // elabora linha com os dados do anime
              '<td>' + animes[i].nome + '</td>' + 
              '<td>' + animes[i].genero + '</td>' + 
              '<td>' + animes[i].numero_de_ep + '</td>' + 
              '</tr>';
            // adiciona a linha no corpo da tabela
            $('#corpoTabelaAnimes').append(lin);
        }
    }
});