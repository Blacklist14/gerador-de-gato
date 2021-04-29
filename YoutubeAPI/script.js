//CONSUMINDO API
const apiTeste = async()=>{
    const url = `https://api.thecatapi.com/v1/images/search`
    const dados = await fetch(url)
    const endereço = await dados.json()
        document.querySelector("#ima").setAttribute("src",`${endereço[0].url}`)
}

document.querySelector("button").addEventListener("click",()=>{
    apiTeste()
})