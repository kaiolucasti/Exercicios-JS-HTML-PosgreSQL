function alterar(){
    
    if($('#radio1').is(':checked')){

    $("#resultado").text('1ª Opção Selecionada!');
    
    }else if($('#radio2').is(':checked')){
    
        $("#resultado").text("2ª Opção Salecionada!")
    }else{
        $('#resultado').text('Nenhuma das Opções.')
    }
}