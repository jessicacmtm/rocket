// Hello world
/* console é um objeto
// .log("hello World") é a função (algo com infos dentro). 
console.log("hello world");*/

// criando um objeto chamado META 
let meta = {
    value: 'ler um livro por mês',
    checked: true,
}

// criando um array de objetos chamado METAS. Nesse array eu incluo o objeto que já criei acima e com a vírgula posso ir acrescentando novos objetos
let metas = [
    meta,
    {
        value: 'caminhar 20 minutos todos os dias',
        checked: false,
    }
]

// visualizar no log o valor "value" do objeto na posição  1 do array
console.log(metas[1].value);
