// function HelloDanki(){
//     console.log('Olá nodeJs');
// }

// exports.HelloDanki = HelloDanki;

class Dankicode{
    constructor(){
            this.name = 'kaique'
            this.testes()
    }

    testes(){
        console.log(this.name);   
    }
}

module.exports = Dankicode;