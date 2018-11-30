import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

declare var $: any;
@Component({
  selector: 'gx-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.less']
})
export class LogarComponent implements OnInit {
  constructor(private login:LoginService) { }

  ngOnInit() {
  }
  removeWarning(id_input, id_small){
    $(id_input).removeClass('has-error');
    $(id_small).html('');
    return false;

  }
  Logar(user, pass){
    var campo_ok = true;
    for(var i =0; i<$('#modal-login input[name=login]').length;i++){
      if($('#modal-login input[name=login]')[i].value === ''){
        campo_ok = false;
        if($('#modal-login input[name=login]')[i].id === 'username'){
          $('#input-username').addClass('has-error');
          $('#msgUser').html('Preencha o campo corretamente.')
        }else{
          $('#input-password').addClass('has-error');
          $('#msgPassword').html('Preencha o campo corretamente.')
        }
      }
    }
    if(campo_ok){
      this.login.Logar(user, pass).subscribe(
        data =>{
          console.log(data);
          $('#modal-login').toggle();
        },
        err =>{ 
          console.log(err);
          $('#msgUser').html('Usuário não encontrado.')
        }
      );
    }
  }
}
