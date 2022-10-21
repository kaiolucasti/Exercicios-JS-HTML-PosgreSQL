let somaI = 0;
let mediaI = 0; 

let somaP = 0; 
let mediaP = 0;

let  par = 0;
let impar = 0;

let quantP = 0;
let quantI = 0;

for (let i = 1; i <= 10; i++){
    console.log(i);

    if(i % 2){
        somaI += i;
        quantI++;

    }else {
        somaP += i;
        quantI++ ;
    }
    mediaI = somaI / quantI;
    mediaP = somaP / quantP;
}

    console.log('total Par = '+ somaI);
    console.log('Média Par = '+ mediaI);

    console.log('total Impar '+ somaP);
    console.log('Média Impar '+ médiaP);