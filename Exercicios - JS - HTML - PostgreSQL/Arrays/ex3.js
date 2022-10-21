function calcula (a){
    let soma = 0;
    let media = 0;
    
    for(let i in a){
        soma+= a[i]
    }

    let array = a.length;
    media = soma / array;

    return{ 
        'soma': soma, 
        'media': media
    }
}
console.log(calcula([4, 8, 20, 6]));
