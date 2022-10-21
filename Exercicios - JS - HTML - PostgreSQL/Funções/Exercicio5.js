function temp(Fahrenheit){

    return Fahrenheit;
}
let fah = temp(5);

while(Fahrenheit <= 110){
    let Celsius = 5/9*(Fahrenheit-32);
    console.log(+Math.round(Celsius)+" C° "+Fahrenheit+" F°");
    Fahrenheit += 5;

}