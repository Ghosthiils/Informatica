let formCadastro = document.getElementById("form-cadastro")

formCadastro.addEventListener("submit", function (event) {

    event.preventDefault() // impede recarregar a página

    let dados = {
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value,
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        permissao: document.getElementById("permissao").value
    }

    fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res => res.status)
    .then(status => {

        if (status == 200) {
            alert("Usuário cadastrado com sucesso!")
            formCadastro.reset()
        } else {
            alert("Erro ao cadastrar usuário")
        }

    })
    .catch(erro => console.log(erro))
})
