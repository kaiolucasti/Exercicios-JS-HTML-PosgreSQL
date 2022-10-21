user(usuarios = [
    {
    nome: 'Rodrigo Melo Fernandes',
    email: 'rodrigo1999@zzzmail.com',
    categorias: ['premium', 'admin', 'proprietario'],
    },
    {
    nome: 'Letícia Goncalves Azevedo',
    email: 'lga@dayrep.com',
    categorias: ['admin'],
    },
    {
    nome: 'Pedro Almeida Oliveira',
    email: 'poliv3@armyspy.com',
    categorias: ['premium', 'promocao'],
    }
]);
function user(){

    let cont = 1;
    for(let user of usuarios){

        console.log("Usuario "+cont)
    
        console.log("Nome:", user.nome)
        console.log("Email:", user.email)
        console.log("Categorias:")
    
        for(let cat of user.categorias){
           console.log(cat)
        }
        cont++;
        console.log() 
    }
}

