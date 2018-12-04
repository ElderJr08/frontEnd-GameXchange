import { Component, OnInit } from '@angular/core';
import { GamesService } from '../categorias/jogos.service';
import { map } from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'gx-meusjogos',
  templateUrl: './meusjogos.component.html',
  styleUrls: ['./meusjogos.component.less']
})
export class MeusjogosComponent implements OnInit {

  actions: any;
  isUserLoggedIn: boolean;
  columns: string[];
  Genders: any;

  constructor(private gameService: GamesService) {
    this.gameService.getCategorias().pipe(
      map(response => response.json())
      ).subscribe(
        data => {
          this.Genders = data;
          console.log(this.Genders);
        });
  }
  ngOnInit() {
    if(localStorage['logado'] !== undefined || Boolean(localStorage['logado'])){
      this.gameService.getMyGames().subscribe(
        data =>{
          console.log(data);
          this.actions = data;
          this.isUserLoggedIn = true;
        }
      );
      this.columns = this.gameService.getColumns();
    }
  }

  removeWarning(id_input, id_small){
    console.log(id_input);
    $(id_input).css('border-color','');
    $(id_input).removeClass('has-error');
    $(id_small).html('');
    return false;

  }

  RegisterGame(titulo,desc,plat,categ){
    console.log('titulo: '+titulo,'desc: '+ desc,'plat: '+ plat,'Categoria: '+ categ);
    var campo_ok = true;
    if(titulo === ''){
      $('#input-title').addClass('has-error');
      $('#msgTitle').html('Preencha o campo corretamente.');
      campo_ok = false;
    }
    if(desc === ''){
      $('#input-description').addClass('has-error');
      $('#msgDescription').html('Preencha o campo corretamente.');
      campo_ok = false;
    }
    if(plat === 'Selecione'){
      $('#input-plataform').addClass('has-error');
      $('#msgPlataform').html('Preencha o campo corretamente.');
      campo_ok = false;
    }
    if(categ === 'Selecione'){
      $('#input-category').addClass('has-error');
      $('#msgCategory').html('Preencha o campo corretamente.');
      campo_ok = false;
    }

    if(campo_ok){
      this.gameService.RegisterGame(titulo,desc,plat,categ).subscribe(
        data => {
          this.gameService.Assign(data['id']).subscribe( dataAssign => {
            console.log(dataAssign);
            $('#modal-registergame-success').toggle();
            location.reload();
          },
          err => {
            console.log(err);
          }
          );
        },
        err => {
          console.log(err);

        }
      );

    }
    
  
    return false;
  }
  

}

