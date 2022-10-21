function Clicar(){

    let n =  $('#numero').val();
    console.log(n)

    $.ajax(
        {
            type: 'GET',
            url: 'https://reqres.in/api/users/'+n,
            success: function(dados){
            
            $('#botão1').text(dados.data.email)
            $('#botão2').text(dados.data.first_name)
            $('#botão3').text(dados.data.last_name)
            $('#campoImagem').attr('src',dados.data.avatar)
            },
            error: function(dados){

            }
        }
    
    );
   
 }
