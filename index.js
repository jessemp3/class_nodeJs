//Forma de criar o servidor
const http = require('http')
const fs = require('fs')
const readline = require('readline')
const hello = require('./modulos')


hello.HelloDanki()

// const  hostname = '127.0.0.1'
// const port  = 3000;


//Criar um novo Arquivo
// fs.writeFile('danki.txt' , 'test danki code' , (err) => {
//     if(err) throw err;
//     console.log('Arquivo criado com sucesso');
// })


//criar novo arquivo ou se já existe , insere o conteudo
// fs.appendFile('danki.txt' , 'mudando o conteudo' , (err) => {
//     if(err) throw err;
//     console.log('Mudança feita com sucesso');
// })

// const server = http.createServer((req, res) => {
//     // res.statusCode = 200
//     // res.setHeader('Content-Type' , 'text/plain')
//     // res.end('Hello Jesse !')

//     if(req.url == '/danki'){

//     fs.readFile('index.html',  (err, data) => {
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(data);
//         return res.end()
//     })

// }else{
//     return res.end()
// }

// })


// server.listen(port , hostname , () => {
//     console.log('Servidor Está rodando');
// })



//ler arquivo

// fs.readFile('danki.txt' , ( err , data ) => {
//     if (err) throw err;

//     let str = data.toString();

//     let newStr = str.split('/')

//     console.log(newStr);
    

// })

//Deletar um arquivo
// fs.unlink('danki.txt' , (err) => {
// if(err) throw err;
//     console.log('Arquivo deletado com sucesso ');
// })

//renomear um arquivo 

// fs.rename('danki.txt' , 'index.css' , (err) => {
//     if (err) throw err
//     console.log('Arquivo modificado com sucesso');
    
// })


//lendo valor de input e mostrando a saida no terminal 
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Qual o seu nome:' , (name) => {
//     console.log(`O nome do usuariao é ${name}`);
//     rl.question('Qual a sua idade' , (idade) => {
//         console.log(`A idade do ${name} é ${idade}`);
        
//     })
// })

// rl.on('close' , () => {
//     console.log('Adeus');
//     process.exit(0)    
// })