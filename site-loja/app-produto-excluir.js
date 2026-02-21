app.delete("/produto/:id", function (req, res) {
    const id = req.params.id
    conexao.query(`delete from produtos where id = ${id}`, function (erro, resultado) {
        if (erro) {
            res.send(erro)
        }
        res.json({ "status": 200, "message": "Excluido com sucesso"})
    })
})


function fnExcluirProduto(id) {
    fetch('http://localhost:3000/produto/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(resposta => resposta.json())
    .then((dados) => {
        console.dir(dados)
    })

    .catch(erro => console.log(erro.message))
}