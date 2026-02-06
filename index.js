
const express = require('express')
const app = express()


/* Indica que todas as requisicoes podem receber body em JSON. A partir disso, o Express aplica um JSON. parse para o conteudo recebido*/
app.use(express.json())


app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('informatica')
})


 //const lista_produtos = [
 //    {
 //        "titulo": "Red Nike",
  //       "foto":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxzaG9lfGVufDB8MHx8fDE3MjEwNDEzNjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
   //     "descricao": "Tênis leve, com design versátil e acabamento moderno, perfeito para acompanhar sua rotina.",
   //      "preco": 499.00,
  //       "avaliacao": 5
  //   },
   //  {
  //       "titulo": "Blue Nike",
  //      "foto":"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "descricao": "Modelo confortável, resistente e ideal para quem busca um visual urbano sem abrir mão do bem-estar.",
  //       "preco": 699.00,
  //      "avaliacao": 3
  //   },
   //  {
  //      "titulo": "Black Nike",
   //    "foto":"https://images.unsplash.com/photo-1643584549066-fc993fc9cb43?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "descricao": "Tênis com ajuste confortável, visual clean e solado que garante estabilidade em cada passo.",
   //      "preco": 799.00,
    //     "avaliacao": 4
   //  }
 //]

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

app.get("/produtos", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    conexao.query("select * from produtos", function (erro, lista_produtos, campos) {
        console.log(lista_produtos)
        res.send(lista_produtos)
    })
})


conexao.connect(function (erro){
    if(erro){
        console.log("Deu ruim na conexao \n");
        throw erro;
    } else {
        console.log("conexao deu bom \n")
    }
})



app.get('/unidades', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('unidades')
})

app.get("/unidades", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    conexao.query("select * from produtos", function (erro, lista_unidades, campos) {
        console.log(lista_unidades)
        res.send(lista_unidades)
    })
})

//Read by categoria - [GET] /produtos/:categoria
app.get("/produtos/:categoria", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", '*')
    //pegamos a categoria que foi enviada na requisicao
    const categoria = req.params.categoria
    conexao.query('Select * from produtos where categoria='${categoria}', function (erro, dados, campos){
        res.send(dados) )
}),



app.listen(3000)



