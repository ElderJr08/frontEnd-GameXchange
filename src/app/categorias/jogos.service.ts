import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Categoria } from "./categoria.model"
import { MY_API } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GamesService {

  isUserLoggedIn: boolean;

    constructor(private http: Http){}

    action(categoria): Observable<Categoria>{
        console.log(categoria);
        console.log(this.http.get(`${MY_API}/category/${categoria}`).pipe(
        map(response => response.json())));
        return this.http.get(`${MY_API}/category/${categoria}`).pipe(
        map(response => response.json()));
    }
    getColumns(): string[]{//para as colunas
      return ["name","description","platform"];
    }
    
}