import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MY_API } from "../app.api";


@Injectable()
export class RegisterService {
    
    constructor(private http: HttpClient/*,
                private router: Router*/){}
    
    RegisterUser(name,nickname,email,password,ddd,cellphone){
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')

        let options = {
            headers: httpHeaders
       }; 
        return this.http.post(`${MY_API}/user`,{
            "name": name,
            "nickname": nickname,
            "email": email,
            "password": password,
            "ddd": ddd,
            "cellphone": cellphone
        },
        options
        );
    }

}