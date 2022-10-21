let livro = {
    Título : 'Dom Casmurro',
    Autor : 'Machado de Assis',
    Número_Paginas: 256
}
function obterDiscricao(obj){
    
return `Título = ${obj.Título}, Autor = ${obj.Autor}, N_Pág = ${obj.Número_Paginas}`;
}
let book = obterDiscricao(livro);
console.log(book);