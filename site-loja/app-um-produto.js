function fnMontarProduto(produto) {
    document.getElementById("foto").src = produto.foto
    document.getElementById("titulo").innerHTML = produto.titulo
    document.getElementById("descricao").innerHTML = produto.descricao
    document.getElementById("categoria").innerHTML = produto.categoria
    document.getElementById("preco").innerHTML = produto.preco.toLocaleString('pt-BR', {
        style: 'currency', currency: 'BRL'})
        document.getElementById("avaliacao").innerHTML = "estrela 1".repeat(produto.avalicao) + `(${produto.avalicao})`

        fnCarregarDados()
    
    
    
}