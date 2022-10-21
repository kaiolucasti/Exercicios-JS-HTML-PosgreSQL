function ehprimo(_numero){

    for (let y = 2; y < _numero; y++){

        if (_numero % y == 0){
        return false;
        }
    
        
    } return true;
}


for (let i = 2; i < 30; i++){

    if(ehprimo(i)){
        console.log(i + ' é primo');

    }
}





//Escreva uma função chamada ehPrimo que receba um número e retorne 
//se esse número é primo ou não. Utilize a chamada dessa função em um loop
 //para listar todos os números primos entre 2 e 30.