const APIURL = 'http://localhost:1337'
const CatsAPIURLEndPoint = '/api/cats/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    try {
        const {data} = await axios(APIURL+CatsAPIURLEndPoint+username+"?populate=*")
        console.info(data)
        createUserCard(data)
        addCaracteristicaToCard(data)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No se ha encontrado ninguna raza de gatos que coincida con el criterio de búsqueda especificado')  
        }
    }     
}


function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
             <img src="${APIURL}${user.data.attributes.perfil_image.data.attributes.url}" alt="${user.data.attributes.raza.data.attributes.nombre}" class="avatar">
            </div>
          
            <div class="user-info">
                    <h2>Raza: ${user.data.attributes.raza.data.attributes.nombre}</h2>
                <div class="container1">
                    <div class="image"><img src="./img/Cat-29.png" width="32" height="32"className="photo" /></div>
                    <div class="text"><p>Origen: ${user.data.attributes.origen.data.attributes.Pais}</p></div>
                </div>
                <div class="container1">
                    <div class="image"><img src="./img/Cat-29.png" width="32" height="32"className="photo" /></div>
                    <p>Clasificación FIFE: ${user.data.attributes.clasificacion_fife.data.attributes.nombre}</p>
                </div>
                <div class="container1">
                    <div class="image"><img src="./img/Cat-29.png" width="32" height="32"className="photo" /></div>
                    <p>Clima: ${user.data.attributes.clima.data.attributes.nombre}</p>
                </div>
                <div class="container1">
                    <div class="image"><img src="./img/Cat-29.png" width="32" height="32"className="photo" /></div>
                    <p>Tamaño: ${user.data.attributes.tamano.data.attributes.valor}</p>
                </div>
                <div class="container1">
                    <div class="image"><img src="./img/Cat-29.png" width="32" height="32"className="photo" /></div>
                    <p>Peso: ${user.data.attributes.peso.data.attributes.valor}</p>
                </div>
                <div class="container1">
                    <div class="image"><img src="./img/Cat-29.png" width="32" height="32"className="photo" /></div>
                    <p>Esperanza de vida: ${user.data.attributes.esperanza_vida.data.attributes.valor}</p>
                </div>               

            <div id="caracter">
                <div class="container1">
                    <div class="image"><img src="./img/Cat-29.png" width="32" height="32"className="photo" /></div>
                    <p>Caracter:</p>
                </div>
            </div>   
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <div class="container1">
                <div class="image"><img src="./img/png-transparent-cat-no-symbol-no-cats-allowed-sign-mammal-cat-like-mammal-carnivoran-thumbnail.png" className="photo" /></div>
                <h1>${msg}</h1>
            </div>
        </div>
    `

    main.innerHTML = cardHTML
}

function addCaracteristicaToCard(caracters) {
    const reposEl = document.getElementById('caracter')

    caracters.data.attributes.caracters.data.slice(0, 12).forEach(caracter => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = 'https://www.google.com/search?q='+caracter.attributes.valor
            repoEl.target = '_blank'
            repoEl.innerText = caracter.attributes.valor

            reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }

})