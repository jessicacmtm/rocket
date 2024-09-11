// os próximos códigos iniciam o menu da aplicação

const {select} = require('@inquirer/prompts')

const start = async () => {

    while(true){
        
        const opcao = await select ({
            message: "Menu >",
            choices: [

                {

                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {

                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "sair",
                    value: 'sair'
                }
            
            ]
        })
    

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

