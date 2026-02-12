
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())


/* Indica que todas as requisicoes podem receber body em JSON. A partir disso, o Express aplica um JSON. parse para o conteudo recebido*/
app.use(express.json())



 
// 1 - trazer apenas 12 primeiros produtos -- select * from produtos limit 12

// 2 - trazer apenas produtos que começam com a letra A -- select * from produtos where  titulo like 'a%'

// 3 - trazer apenas produtos que tenham o preço de 410 -- select * from produtos where preco = 410

// 4 - trazer apenas produtos com avaliacao 4 e 5 -- select * from produtos where avaliacao = 4  or avaliacao = 5

// 5 - trazer apenas produtos com avaliacao 1 e 5 -- select * from produtos where avaliacao = 1 or avaliacao = 5

// 6 - trazer apenas produtos entre id 21 e 32 -- select * from produtos where id between 21 and 32

// 7 - trazer apenas os 12 ultimo produtos -- 

// 8 - trazer apenas os 12 primeiros produtos com avaliacao 5
// 9 - trazer todos os produtos em ordem de preço do menor para o maior
// 10 - trazer todos os produtos em ordem de avaliacao do menor para o maior
let mysql = require('mysql')
let conexao = mysql.createConnection({
    host: "108.179.193.209",
    user: "gutoxa27_alunos",
    password: "JD_eXLNHp1ZG",
    database: "gutoxa27_bd_loja"

})




conexao.connect(function (erro){
    if(erro){
        console.log("Deu ruim na conexao \n");
        throw erro;
    } else {
        console.log("conexao deu bom \n")
    }
})

app.post("/produto/", function (req, res) {
    const { titulo, preco, descricao, avaliacao, foto, categoria } = req.body;
    conexao.query(`
        INSERT INTO produtos(titulo, foto, descricao, preco, avaliacao, categoria)
        values ('${titulo}' , '${descricao}', '${preco}', '${avaliacao}' , '${categoria}')`),
        function (erro, resultado) {
if (erro) {
    res.json(erro);
}
res.send(resultado.insertid);
        }
})












app.listen(3000)



