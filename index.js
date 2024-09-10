/* Explicando o código a seguir: 
const: Essa palavra-chave em JavaScript declara uma constante, ou seja, uma variável cujo valor não pode ser reatribuído após sua inicialização.
start: Este é o nome da constante. É comum usar nomes descritivos para facilitar a compreensão do código. Nesse caso, "start" sugere que essa constante provavelmente armazenará uma função relacionada ao início de alguma ação.
=: O sinal de igualdade é o operador de atribuição, utilizado para atribuir um valor a uma variável ou constante.
() => {}: Esta é uma sintaxe concisa para definir uma função arrow function em JavaScript.
(): Os parênteses indicam que a função não recebe nenhum parâmetro.
=>: A seta indica que estamos definindo uma função arrow.
{}: As chaves delimitam o corpo da função, onde o código a ser executado é colocado.
Em resumo:
A linha de código const start = () => {} declara uma constante chamada "start" e atribui a ela uma função arrow que, no momento, não realiza nenhuma ação. Essa função pode ser chamada posteriormente no código para executar alguma lógica específica.*/

const start = () => {

    while(true) {
        
        let opcao = "sair"

        switch (opcao) {
            
            case "cadastrar":
                console.log("Vamos cadastrar")
                break

            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                return

        }
    }
}

start()
