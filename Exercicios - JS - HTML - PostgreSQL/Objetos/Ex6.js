let contaX = {
    nome: 'José Fontes',
    saldo: 1000
};

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000
}
function deposita(conta, valor){
    conta.saldo += valor
}
deposita(contaX, 300);
console.log("Novo saldo após deposito: ")
console.log(contaX)


deposita(contaY, 300);
console.log("Novo saldo após deposito:")
console.log(contaY)

function retira(conta, valor){
    conta.saldo -= valor
}
retira(contaX, 450)
console.log("Novo saldo após retirada:")
console.log(contaX)

retira(contaY, 450)
console.log("Novo saldo após retirada:")
console.log(contaY)

function transfere(conta1, conta2, valor){
       conta1.saldo = contaY.saldo - valor
       conta2.saldo = valor + contaX.saldo
        
        

}
transfere(contaY, contaX, 500)

console.log("Transferencia da conta Y, para conta X de R$ 500,00")

console.log(contaY)
console.log(contaX)
