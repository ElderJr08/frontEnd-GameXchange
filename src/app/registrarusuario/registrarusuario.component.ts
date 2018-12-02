import { Component, OnInit } from '@angular/core';
import { RegisterService } from './registrarusuario.service';
declare var $: any;
@Component({
  selector: 'gx-registrarusuario',
  templateUrl: './registrarusuario.component.html',
  styleUrls: ['./registrarusuario.component.less']
})
export class RegistrarusuarioComponent implements OnInit {

  constructor(private registerUser: RegisterService) { }

  ngOnInit() {
  }

  removeWarning(id_input, id_small){
    console.log(id_input);
    $(id_input).css('border-color','');
    $(id_input).removeClass('has-error');
    $(id_small).html('');
    return false;

  }

  RegisterUser(name,nickname,email,password,ddd,cellphone){
    var campo_ok = true;
    for(var i =0; i<$('#registerUser input[name=register]').length;i++){
      if($('#registerUser input[name=register]')[i].value === ''){
        campo_ok = false;
        if($('#registerUser input[name=register]')[i].id === 'registerName'){
          $('#input-register-name').addClass('has-error');
          $('#msgRegisterName').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerNickname'){
          $('#input-register-nickname').addClass('has-error');
          $('#msgRegisterNickname').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerEmail'){
          $('#input-register-email').addClass('has-error');
          $('#msgRegisterEmail').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerDDD'){
          $('#registerDDD').css('border-color','red');
          $('#msgRegisterCellphone').html('Preencha o campo corretamente.');
        }else if($('#registerUser input[name=register]')[i].id === 'registerPhone'){
          $('#registerPhone').css('border-color','red');
          $('#msgRegisterCellphone').html('Preencha o campo corretamente.');
        }else if($('#registerUser input[name=register]')[i].id === 'registerPassword'){
          $('#input-register-password').addClass('has-error');
          $('#msgRegisterPassword').html('Preencha o campo corretamente.')
        }else if($('#registerUser input[name=register]')[i].id === 'registerRePassword'){
          $('#input-register-repassword').addClass('has-error');
          $('#msgRegisterRepeatPassword').html('Preencha o campo corretamente.')
        }
      }
    }
    if(campo_ok){
      this.registerUser.RegisterUser(name,nickname,email,password,ddd,cellphone).subscribe(
        data =>{
          console.log(data);
          
        },
        err =>{ 
          console.log(err);
         
        }
      );
    }
  }

}
