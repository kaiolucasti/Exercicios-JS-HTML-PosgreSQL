let a = process.argv[2];//Linha

for(let y = 1; y <= a; y++){ //Linha
    
    for(let i = a; i >= y; i--){ //coluna

    process.stdout.write('* ');
    }
    console.log();
    
}