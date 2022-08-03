var botao = document.querySelector('.botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    var form = document.querySelector('.formulario');

    var inputDados = obtemDadosDoForm(form);

    var erros = validaDadosForm(inputDados);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    form.reset()

    var mensagensErro = document.querySelector(".mensagens-erro");
    mensagensErro.innerHTML = "";


})

function obtemDadosDoForm(form) {
    var dados = {
        nome: form.nome.value,
        telefone: form.telefone.value,
        endereco: form.endereco.value,
        email: form.email.value,
        senha: form.senha.value
    }

    return dados;
}

function validaDadosForm(inputDados) {
    var erros = [];

    if (inputDados.nome.length == 0) {
        erros.push('O nome não pode estar em branco!')
    }

    if (inputDados.telefone.length == 0) {
        erros.push('O telefone não pode estar em branco!')
    }

    if (inputDados.endereco.length == 0) {
        erros.push('O endereço não pode estar em branco!')
    }

    if (inputDados.email.length == 0) {
        erros.push('O email não pode estar em branco!')
    }

    if (inputDados.senha.length == 0) {
        erros.push('A senha não pode estar em branco!')
    }

    return erros;

}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector('.mensagens-erro');
    ul.innerHTML = '';
    ul.classList.add('erro')
    erros.forEach(function (erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}