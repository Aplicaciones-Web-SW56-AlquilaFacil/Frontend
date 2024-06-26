import http from "../../shared/services/http-common.js";
export class CardEndpoint {
    getAllLocals(){
        return http.get('locals')
    }

    createLocal(localResource) {
        return http.post('/locals', localResource);
    }

    getLocalById(localId) {
        return http.get(`/locals/${localId}`);
    }

}