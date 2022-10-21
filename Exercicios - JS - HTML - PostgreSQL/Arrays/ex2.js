let cores = ['ciano', 'verde', 'amarelo'];
cores.push('vermelho');
cores.push('azul');

for(let i = 0; i < cores.length; i++){
    console.log(`-${cores[i]}`)
}
console.log();

for(let i in cores){
    console.log(`-${cores[i]}`)
}
console.log();

for(let i of cores){
    console.log(`-${[i]}`)
}