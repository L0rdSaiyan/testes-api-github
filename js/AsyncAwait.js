function primeiraFuncao(){


    return new Promise((resolve) =>{

setTimeout(()=>{

console.log("Esperou isso aq")
resolve()
},2000)

    })

}

async function segundaFuncao(){

console.log("iniciou")

await primeiraFuncao()

console.log("Terminou")

}

segundaFuncao()