const APIURL = 'http://localhost:1337'
const CatsAPIURLEndPoint = '/api/cats/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    try {
        const {data} = await axios(APIURL+CatsAPIURLEndPoint+username+"?populate=*")
        //data.bio = !!data.bio !== false ? data.bio : 'No description' ;
        console.info(data)
        createUserCard(data)
        addCaracteristicaToCard(data)
        //getRepos(username)

    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No se ha encontrado ninguna raza de gatos que coincida con el criterio de búsqueda especificado')  
        }
    }     
}

async function getRepos(username){
    try {
        const {data} = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)

    } catch(err){
            createErrorCard('Problem fetching repos')
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
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

               

            <div id="repos"></div>   
            </div>
        </div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.slice(0, 12).forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        
    })

}

function addCaracteristicaToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.data.attributes.caracters.data.slice(0, 12).forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = 'https://www.google.com/search?q='+repo.attributes.valor
            repoEl.target = '_blank'
            repoEl.innerText = repo.attributes.valor

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