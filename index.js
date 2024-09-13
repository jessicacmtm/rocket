// os próximos códigos iniciam o menu da aplicação

const {select, input, checkbox} = require('@inquirer/prompts')

let mensagem = "Bem vindo ao App de Metas";
let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false, 
}

let metas = [meta] 

const cadastrarMeta = async () => {

    const meta = await input({message: 'Digite a meta:'})  //sempre que eu utilizar um "await" eu preciso utilizar o async. 

    if(meta.length == 0) {
       
        mensagem = 'A meta não pode ser vazia'
        return
        
    }

    metas.push (
        { value: meta, checked: false} // toda meta começa falsa pq eu ainda não terminei ela, to só cadastrando
    )

    mensagem = "Meta cadastrada com sucesso"
}

const listarMetas = async() => {

    const respostas = await checkbox({
        
        message: "Use setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa. ",
        choices:[...metas], // os ...metas faz uma "cópia" de tudo que está guardado em metas, inclusive o que for cadastrado
        instructions: false
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.lenght == 0) {
        mensagem = "Nenhuma meta selecionada"
        return
    }
    
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })
        
    
    mensagem = "Meta(s) marcada(s) como concluída(s)"
}

const metasRealizadas = async() => {

    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.lenght == 0) {
        mensagem = "Não existem metas realizadas!"
        return
    }

    await select({
        message: "Metas Realizadas " + realizadas.lenght,
        choices: [...realizadas]
    })
}

    const metasAbertas = async() => {
        const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if (abertas.lenght == 0) {
        mensagem = "Não existem metas abertas"
        return
    }

    await select({
        message: "Metas abertas " + abertas.length,
        choices: [...abertas]
    })

}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
         return {value: meta.value, checked: false}
    })

    const itensADeletar = await checkbox({
        message: "Selecione item para deletar",
        choices: [...metasDesmarcadas],
        instruction: false

    })
    
    if (itensADeletar == 0) {
        mensagem ="Nenhum item para deletar"
        return
        
    }
    itensADeletar.forEach ((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item

        })
    })
    
    mensagem = "Meta(s) deletada(s) com sucesso!"
}

const mostrarMensagem = () => {
    
    console.clear();
    
    if (mensagem != ""){
        console.log(mensagem)
        console.log("")
        mensagem = ""
    }
}

const start = async () => {

    while(true){

        mostrarMensagem()
        
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
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Deletar metas",
                    value: "deletar"
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
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMetas()
                break
            case "sair":
                console.log('Até a próxima')
                return

        }
    }
}

start()

