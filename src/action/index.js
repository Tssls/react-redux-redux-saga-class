function httpGet(url){
    return fetch(url).then(response => response.json())
}

export function getApiopen(){
    return httpGet('https://jsonplaceholder.typicode.com/users')
}