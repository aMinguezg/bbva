import ButtonGame from '../components/button-game/model/button-game'
import { TYPES } from '../models/types'

export const createButtons = function () {
    const button1 = new ButtonGame(TYPES.ROCK, 'bi bi-egg-fill', 'rock')
    const button2 = new ButtonGame(TYPES.PAPER, 'bi bi-file-text', 'papper')
    const button3 = new ButtonGame(TYPES.SCISSORS, 'bi bi-scissors', 'scissors')

    return [button1, button2, button3]
}
