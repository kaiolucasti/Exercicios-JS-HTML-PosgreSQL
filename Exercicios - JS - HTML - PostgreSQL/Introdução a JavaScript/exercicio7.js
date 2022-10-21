const x = process.argv[2]

const y = process.argv[3]

const a = process.argv[4]


if(parseInt(x) > parseInt(y) && parseInt(x) > parseInt(a)){
    console.log('Número maior é: '+x);

}if (parseInt(y) > parseInt(x) && parseInt(y) > parseInt(a)){
    console.log('Número maior é: '+y);

}else (console.log('Número maior é: '+a))
