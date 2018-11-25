import { Usuario } from '../usuarios/usuario.model';

export interface Jogos {
    id: number,
    name: string,
    description: string,
    plataform: string,
    insertDate:string,
    tradeDate:string,
    isAvailable: string,
    users: Usuario[]
}