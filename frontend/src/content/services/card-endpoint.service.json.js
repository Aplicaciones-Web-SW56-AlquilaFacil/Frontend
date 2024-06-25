import http from "../../shared/services/http-common.js";
export class CardEndpoint {
    getAllLocals(){
        return http.get('locals')
    }

}