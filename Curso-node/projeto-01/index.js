//Criação do servidor
const express =  require('express')
const app = express()
const path = require('path')
let bodyParser = require('body-parser')

app.use( bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

app.engine('html' , require('ejs').renderFile)
app.set('view engine' , 'ejs')
app.use('/public' , express.static(path.join(__dirname, 'public')))
app.set('views' , path.join(__dirname, '/src/Views'))


//lista de tarefas
var tarefas = ['Terminar curso']

//metodo que mostra a lista de tarefas 
app.get('/', (req, res) => {
    res.render('index' , {tarefasList:tarefas})
  })


//metodo de adicionar itens a lista
app.post('/' , (req,res) => {
    tarefas.push(req.body.tarefa)
    res.render('index' , {tarefasList:tarefas})
})

//metodo de deletar algun iten da lista
app.get('/deletar/:id' , (req , res) => {
    tarefas = tarefas.filter((val,index) => {
        if(index != req.params.id){
            return val;
        }
    })


    res.render('index' , {tarefasList:tarefas})

})

//criação do servidor
app.listen(3000 , () => {
    console.log('Servidor rodando');
    
})

