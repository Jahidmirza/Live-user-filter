const result = document.querySelector('#result');
const filter = document.querySelector('#filter');
const listItems = [];
getData();

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50')

    const {results} = await res.json()
    //Clear Result
    result.innerHTML= ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML=`
          <img src="${user.picture.large}" alt="${user.name.first}">
          <div class="info-user">
            <h5>${user.name.first} ${user.name.last}</h5>
            <p>${user.location.city}</p>
            <p> ${user.location.country}</p>
            </div>
        `;
        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}