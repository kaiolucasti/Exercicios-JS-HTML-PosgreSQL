function Clicar(){

    $.ajax(
        {
            type: 'POST',
            url: 'https://reqres.in/api/users',
            data: {
                "name": $("#nome").val(),
                "job": $("#job").val()
                
            },
            success: function(dados){
            $('#cadastro').append(dados.id)
            $('#botão1').text(dados.name)
            $('#botão2').text(dados.job)
           
            },
            error: function(dados){
                alert("Não foi possivel fazer seu cadastro!")

            }
        }
    
    );
   
 }