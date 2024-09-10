## Para usar o git bash e node no terminal
- git init
- node index.js (index.js é um ex do nome do arquivo que quero executar no terminal)
- Depois disso, já consigo visualizar os console.log lá
## Linguagem de programação

Maneira de dar instrução ao computador.
Como um lego, você irá utilizar peças para criar algoritmos, ou seja, para resolver problemas.

## Peças de uma linguagem

- Comentários (em JS: // ou /* */)
- Declaração de variáveis (const, let)
- Operadores (atribuição,  concatenação, matemáticos,lógicos)
- Tipos de dados (string, number, boolean)
- Estrutura de dados (functions, object, array)
- Controle de fluxo (if/else)
- Estruturas de repetição (for, while)

## Fases de resolução de  um problema

- Coletar os dados
- Processar os dados (manipular, alterar...)
- Apresentar os dados

## Escopos e variáveis

- Variáveis globais
- Variáveis locais: dentro de { }
- Constantes

## Tipos de dados

- Strings (texto): "" '' ``
- Number: numeros inteiros ou não
- Boolean: true false

## Operadores

- Atribuição de valor: =
- Operador de concatenação: +

## Estruturas de dados

### Arrays: 
- uma lista que contém qualquer tipo de dado
fica entre []

### Objetos:
- fica entre {}
- Todo objeto tem propriedade e valor
- Atributos e métodos (métodos são iguais a funções, só que normalmente métodos estão dentro de objetos e funções estão fora. Ou seja, métodos são funções dentro de objetos)
- Criação e manipulação de objetos
- Acesso a propriedades de objetos

### Function

- Criar
- Executar
- Arrow function
- Named function

## // Hello world
- console é um objeto
- .log("hello World") é a função (algo com infos dentro). 
- console.log("hello world");

## criando um objeto chamado META 
let meta = {
    value: 'ler um livro por mês',
    checked: true,
}

## criando um array de objetos chamado METAS.
- Nesse array eu incluo o objeto que já criei acima e com a vírgula posso ir acrescentando novos objetos:

let metas = [
    meta,
    {
        value: 'caminhar 20 minutos todos os dias',
        checked: false,
    }
]

## visualizar no log o valor "value" do objeto na posição  1 do array
ex: console.log(metas[1].value);


## Estruturas de Repetição
- While

## Condicionais

- Switch - 

## criando uma função
function start() {
    console.log('Começou')
}

- para iniciar a função que criei acima, preciso chamá-la: 
start()


## Importando o npm (node package manager) (gerenciador de pacotes do node)

- no console, digitar por ex:
npm install inquirer

(o inquirer é o pacote que eu quero baixar neste projeto)