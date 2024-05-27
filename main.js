document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela com os valores inseridos
    const tabela = document.querySelector('tbody');
    const novaLinha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;
    novaLinha.appendChild(colunaNome);

    const colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;
    novaLinha.appendChild(colunaTelefone);

    tabela.appendChild(novaLinha);

    // Limpa os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
});
