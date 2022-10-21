function Clicar(){


   let n =  $('#numero1').val()
   console.log(n)

   $('#botão').load('http://numbersapi.com/'+n);

  
}
