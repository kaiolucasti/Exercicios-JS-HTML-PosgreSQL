let temperaturaF = 5;

for(temperaturaF = 5; temperaturaF < 115; temperaturaF+= 5){

var celsius = 5/9*(temperaturaF - 32);

console.log('A temperatura '+temperaturaF+ '°F  '+parseInt(celsius)+ '°C');

if(celsius < 0){
    
    console.log('A temperatura abaixo de 0°')

}else 
    console.log('A temperatura é acima de 0°')
    

}