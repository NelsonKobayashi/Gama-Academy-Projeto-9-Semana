const root=document.querySelector('#root')
const paginacao=document.querySelector('#paginacao')
let dadosAPI = []
let pagina = 1
const carregarPagina = (e) => {
    pagina = e.value
    carregarCards()
}
const carregarCards = () => {
    root.innerHTML =''
    for (let i = (pagina -1)*6; i < pagina * 6; i++) {
        const div = document.createElement('div')
        div.classList.add('card')
        div.classList.add('col-4')
        div.innerHTML = `
            <img class= "card-img-top imagem" src=${dadosAPI[i].photo} alt={dadosAPI[i].name}/>
            <div class="card-body">
                <h3 class="card-title">${dadosAPI[i].property_type}</h3>
                <p class= "card-text">${dadosAPI[i].name}</p>
                <p class= "text-right">${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format (dadosAPI[i].price)}</p>
            </div>
        `
        root.appendChild(div)
    }
}
const buscaAPI = () =>{
    fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
    .then(resposta => resposta.json ())
    .then(json=>{
        dadosAPI = json
        for(let i = 1; i<= dadosAPI.length/6; i++) {
           paginacao.innerHTML += `<input type="button" value=${i} onclick="carregarPagina(this)"/>`
        }
        carregarCards()
    })
}
buscaAPI()




