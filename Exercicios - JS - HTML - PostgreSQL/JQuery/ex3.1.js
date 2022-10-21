function alterar(){
    let frase =
    ["Nada é para sempre.",
    "A fé move montanhas.",
    "O futuro á Deus pertence.",
    "Deus é o caminho."
    ];
    let novo = $('<p>').text(frase[contador]);
    
    $('#segundo').append(novo);
    
    contador++;

}let contador = 0;