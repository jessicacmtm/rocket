// os próximos códigos iniciam o menu da aplicação

const {select, input} = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false, 
}

let metas = [meta] 

const cadastrarMeta = async () => {

    const meta = await input({message: 'Digite a meta:'})  //sempre que eu utilizar um "await" eu preciso utilizar o async. 

    if(meta.length == 0) {
       
        console.log('A meta não pode ser vazia')
        return
        
    }

    metas.push (
        { value: meta, checked: false} // toda meta começa falsa pq eu ainda não terminei ela, to só cadastrando
    )
}

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
                await cadastrarMeta()
                console.log(metas)

            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log('Até a próxima')
                return

        }
    }
}

start()

