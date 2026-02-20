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




