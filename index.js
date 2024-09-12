// os próximos códigos iniciam o menu da aplicação

const {select, input, checkbox} = require('@inquirer/prompts')

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

const listarMetas = async() => {

    const respostas = await checkbox({
        
        message: "Use setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa. ",
        choices:[...metas], // os ...metas faz uma "cópia" de tudo que está guardado em metas, inclusive o que for cadastrado
        instructions: false
    })

    if(respostas.lenght == 0){
        console.log("Nenhuma meta selecionada")
        return
    }
    metas.forEach((m) => {
        m.checked = false
    })

    
    respostas.forEach((resposta) =>{
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })
        
    
    console.log('Meta(s) marcadas como concluídas')
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
                await listarMetas()
                break
            case "sair":
                console.log('Até a próxima')
                return

        }
    }
}

start()

