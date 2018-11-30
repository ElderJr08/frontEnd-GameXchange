import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'gx-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.less']
})
export class RegistrarusuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeWarning(id_input, id_small){
    console.log(id_input);
    $(id_input).removeClass('has-error');
    $(id_small).html('');
    return false;

  }

  RegisterUser(){
    var campo_ok = true;
    for(var i =0; i<$('#registerUser input[name=register]').length;i++){
      if($('#registerUser input[name=register]')[i].value === ''){
        campo_ok = false;
        if($('#registerUser input[name=register]')[i].id === 'registerName'){
          $('#input-register-name').addClass('has-error');
          $('#msgRegisterName').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerEmail'){
          $('#input-register-email').addClass('has-error');
          $('#msgRegisterEmail').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerCellphone'){
          $('#input-register-cellphone').addClass('has-error');
          $('#msgRegisterCellphone').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerPassword'){
          $('#input-register-password').addClass('has-error');
          $('#msgRegisterPassword').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerRePassword'){
          $('#input-register-repassword').addClass('has-error');
          $('#msgRegisterRepeatPassword').html('Preencha o campo corretamente.')
        }
      }
    }
  }

}
