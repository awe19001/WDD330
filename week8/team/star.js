let shipArray = [];

fetch('https://swapi.dev', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})

    .then(response => {
        return response.json();
    })