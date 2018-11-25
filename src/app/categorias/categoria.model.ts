import { Jogos } from './jogos.model'

export interface Categoria {
    id: number,
    name: string,
    games: Jogos[];
}