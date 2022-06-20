let card1 = document.querySelector("#card1")
let btnAdicionar = document.querySelector("#mostrarInfo")
let btnRemover = document.querySelector("#removerInfo")


async function mostrarDados(){
    const url = "https://swapi.dev/api/starships/"
    try {
            let resultado = await fetch(url)
            const dados = await resultado.json()
            //console.log(dados.results)
            //console.log(cont)
            let elementos = dados.results
            
            const div1 = document.createElement("div")
            div1.classList.add("row")
            div1.classList.add("row-cols-6")
            div1.classList.add("row-cols-md-1")
            div1.classList.add("g-4")

            const div2 = document.createElement("div")
            div2.classList.add("col-6")

            const div3 = document.createElement("div")
            div3.classList.add("card")
            div3.classList.add("card-body")
            div3.classList.add("opacity-75")
        
            const cardTitulo = document.createElement("h5")
            cardTitulo.classList.add("card-title")
            cardTitulo.classList.add("text-center")
            cardTitulo.textContent = `Nome: ${elementos[x].name}`

            const cardTexto = document.createElement("p")
            cardTexto.classList.add("card-text")
            cardTexto.classList.add("text-center")
            cardTexto.textContent = `Modelo: ${elementos[x].model}`

            div1.appendChild(div2)
            div2.appendChild(div3)
            div3.appendChild(cardTitulo)
            div3.appendChild(cardTexto)
            card1.appendChild(div1)
                       
    } catch (error) {
        console.log("o seguinte erro ocorreu: ", error)
    }
}

 function removerDados(){
    if(card1.children.length>0){
        card1.removeChild(card1.lastElementChild)
    }
}

let x = -1

btnAdicionar.addEventListener("click", ()=>{
    x++
    mostrarDados()
})

btnRemover.addEventListener("click", ()=>{
    removerDados()
})

