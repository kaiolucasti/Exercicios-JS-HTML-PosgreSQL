function Clicar(){

    let n =  $('#numero1').val()
    console.log(n)

    $.ajax(
    
        {   type: 'GET',
            url: 'http://numbersapi.com/'+n,
            success: function (dados){
                
                $('#botão').text(dados);

            }
        }
    );
   
 }