import { Injectable } from '@angular/core';
import { MY_API } from '../app.api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    /*public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('logado')));*/
    
    constructor(private http: HttpClient/*,
                private router: Router*/){}
    
    Logar(user,pass){
        /*let router = this.router;
        let isUserLoggedIn = this.isUserLoggedIn;*/
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', 'Basic ' + btoa(user+':'+pass));

        localStorage.setItem('token', 'Basic ' + btoa(user+':'+pass));

        let options = {
            headers: httpHeaders
       }; 

      return this.http.post(`${MY_API}/login`, null, options)/*.subscribe(function(res){
          console.log(res);
            if(res === null){
                console.log('ok');      
                if(localStorage['token'] !== ''){
                    localStorage.setItem('logado', 'true');
                    localStorage.setItem('nickname', user.split('@')[0].toUpperCase());
                    console.log(localStorage);
                    router.navigate(['']);       
                    isUserLoggedIn.next(true);
                }
            }
        });*/
    }

}