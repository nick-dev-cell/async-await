const body = document.querySelector("body")
async function apresentaPersonagem() {
   const response = await fetch("https://rickandmortyapi.com/api/character/?page=1") 
   const data = await response.json()
   data.results.forEach((personagem)=>{
    const img = document.createElement("img")
    img.setAttribute("src", `${personagem.image}`)

    body.appendChild(img)
    })
}

apresentaPersonagem()