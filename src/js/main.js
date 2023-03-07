"use strict";


// place your code below

const list = document.querySelector('.list--js');
const search = document.querySelector('.search--js');
const buttonSearch = document.querySelector('.buttonSearch--js');

buttonSearch.addEventListener('click', (e) => {
    localStorage.setItem('name', search.value);
    window.location.reload();
});

search.value = localStorage.getItem('name');
const name = localStorage.getItem('name');

fetch('https://api.github.com/users/'+name+'/repos')
.then(resp => resp.json())
.then(resp => {
    const repos = resp;
    for(const repo of repos){
        list.innerHTML += `<li><a href="${repo.html_url}">${repo.name}</a></li>`;
    }
})
.catch(err => {
    console.log(err);
})


