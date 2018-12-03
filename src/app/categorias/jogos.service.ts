import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Categoria } from "./categoria.model"
import { MY_API } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class GamesService {

  isUserLoggedIn: boolean;
  

    constructor(private http: Http, private httpClient:HttpClient ){

    }

    action(categoria): Observable<Categoria>{    
        return this.http.get(`${MY_API}/category/${categoria}`).pipe(
        map(response => response.json()));
    }
    getColumns(): string[]{//para as colunas
      return ["name","description","platform"];
    }

    getCategorias(){
       return this.http.get(`${MY_API}/category`)
    }

    getMyGames(){    
      let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', localStorage['token']);
      
        let options = {
          headers: httpHeaders
        }
       

      return this.httpClient.get(`${MY_API}/user/games`,options);
    }

    RegisterGame(titulo,desc,plat,categ){
      console.log('titulo: '+titulo,'desc: '+ desc,'plat: '+ plat,'Categoria: '+ categ);
      let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', localStorage['token']);
      
        let options = {
          headers: httpHeaders
        }

        return this.httpClient.post(`${MY_API}/games`,{
          "name":titulo,
          "description":desc,
          "platform":plat,
          "categoryId":parseInt(categ)

        },options);

    }

    Assign(gameId){
      let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', localStorage['token']);
      
        let options = {
          headers: httpHeaders
        }

      return this.httpClient.post(`${MY_API}/user/game`,
       {
         gameId: gameId
        }, 
        options);
    }

   

    
}