import axios from 'axios'
const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Aplicaciones-Web-SW56-AlquilaFacil/Fake-api'
})
export class CardEndpoint {
    getAll(){
        return http.get('https://my-json-server.typicode.com/Aplicaciones-Web-SW56-AlquilaFacil/Fake-api/card')
    }

}