import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from './logar/login.service';
import { GamesService } from './categorias/jogos.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MinhastrocasComponent } from './minhastrocas/minhastrocas.component';
import { MeusjogosComponent } from './meusjogos/meusjogos.component';
import { AcaoComponent } from './categorias/acao/acao.component';
import { ROUTES } from './app.routes';
import { AventuraComponent } from './categorias/aventura/aventura.component';
import { EsportesComponent } from './categorias/esportes/esportes.component';
import { RpgComponent } from './categorias/rpg/rpg.component';
import { FpsComponent } from './categorias/fps/fps.component';
import { OutrosComponent } from './categorias/outros/outros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogarComponent } from './logar/logar.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RegisterService } from './registrarusuario/registrarusuario.service';
import { MinhaspropostasComponent } from './minhaspropostas/minhaspropostas.component';
import { ListasolicitanteComponent } from './listasolicitante/listasolicitante.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MinhastrocasComponent,
    MeusjogosComponent,
    AcaoComponent,
    AventuraComponent,
    EsportesComponent,
    RpgComponent,
    FpsComponent,
    OutrosComponent,
    UsuariosComponent,
    LogarComponent,
    RegistrarusuarioComponent,
    MinhaspropostasComponent,
    ListasolicitanteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoginService,GamesService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
