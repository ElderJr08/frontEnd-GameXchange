import { Injectable } from '@angular/core';
import { MY_API } from '../app.api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    public isUserLoggedIn: boolean;
    
    constructor(private http: HttpClient){}
    
    Logar(user,pass){
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', 'Basic ' + btoa(user+':'+pass));

        localStorage.setItem('token', 'Basic ' + btoa(user+':'+pass));

        let options = {
            headers: httpHeaders
       }; 

      return this.http.post(`${MY_API}/login`, null, options)
    }

}