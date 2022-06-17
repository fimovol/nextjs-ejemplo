export function nombrerandom(){
    return fetch('/api/hello')
    .then(response => response.json())
    .then(data => data.name);
}

export function otrallamada(){
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => data.name);
}