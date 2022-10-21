function calcula(...args){
    let soma = 0;
    let media = 0;
    
    for(let i in args){
        soma+= args[i]   
    }

    let array = args.length;
    media = soma / array;

    return {
         'soma': soma,
         'media': media
    }
}
console.log(calcula(4, 8, 20, 6));