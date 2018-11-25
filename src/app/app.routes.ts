import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcaoComponent } from './categorias/acao/acao.component';
import { MeusjogosComponent } from './meusjogos/meusjogos.component';
import { MinhastrocasComponent } from './minhastrocas/minhastrocas.component';
import { AventuraComponent } from './categorias/aventura/aventura.component';
import { EsportesComponent } from './categorias/esportes/esportes.component';
import { RpgComponent } from './categorias/rpg/rpg.component';
import { FpsComponent } from './categorias/fps/fps.component';
import { OutrosComponent } from './categorias/outros/outros.component';
import { RegistrarusuarioComponent } from './registrarusuario/registrarusuario.component';


export const ROUTES: Routes =[
    {path:'', component: HomeComponent},
    {path:'genero/acao', component: AcaoComponent},
    {path:'genero/aventura', component: AventuraComponent},
    {path:'genero/esportes', component: EsportesComponent},
    {path:'genero/rpg', component: RpgComponent},
    {path:'genero/fps', component: FpsComponent},
    {path:'genero/outros', component: OutrosComponent},
    {path:'meusjogos', component: MeusjogosComponent},
    {path:'minhastrocas', component: MinhastrocasComponent},
    {path:'registrarusuario', component: RegistrarusuarioComponent}
    


]