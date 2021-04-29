
const busca = async()=>{
    const pegaId = document.querySelector("#box-inp")
    const url = `https://ragnarokapi.herokuapp.com/api/v1.0/item/${pegaId.value}`
    const dados = await fetch(url)
    const endereço = await dados.json()
        document.querySelector(".title").innerHTML= endereço.name
        document.querySelector("img").setAttribute("src",`${endereço.cardImgUrl || endereço.imgUrl}`)
        document.querySelector(".descrip").innerHTML= `level ${endereço.description}`
        console.log(endereço)
}

document.querySelector("#submite").addEventListener("click",()=>{
    busca()
})

