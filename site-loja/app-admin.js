const { useSyncExternalStore } = require("react");

function fnCarregarDados(){
    
 const parametros = new useSearchParams(window.location.search);

 const id = parametros.get('id') + "/"

    
    fetch('https://localhost:3000/produtos/' , { method: 'GET'})
    .then((resposta) => resposta.json())
    .then((produtos) => {
        produtos.forEach(produto => {
 fnMontarLinhaProduto(produto)
        });
       
    })
    .catch(err => console.log(err.message))
}

<button type="button" class="btn" onClick="fnExcluirProduto(${produto.id}, event.target">Excluir</button>

function excluirProduto(id) {

    let confirmar = confirm("Tem certeza que deseja excluir?");

   if (confirmar) {
    fetch('http://localhost:3000/produto/' + id, {
        method: 'DELETE' , 
        headers: {
            'Content Type': 'application/json',
        }
    })
    .then(resposta => resposta.json())
    .then((dados) => {
        elemento.closest("tr").remove()
    })
    .catch(erro => console.log(erro.message))
   }
}




