let familia = [
    [ "Fred", "Barney" ],
    [ "George", "Jane", "Elroy" ],
    [ "Homer", "Marge", "Bart" ]
];
for(let line of familia){
    
    for(let pessoa of line){

        process.stdout.write(pessoa+"\t");
    }
    console.log() 
}

