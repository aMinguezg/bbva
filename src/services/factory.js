import ButtonGame from "../components/button-game/model/button-game";
import { TYPES } from "../models/types";

export const createButtons = function () {
    const button1 = new ButtonGame(TYPES.PAPER, "ss", "papper");
    const button2 = new ButtonGame(TYPES.ROCK, "ss", "rock");
    const button3 = new ButtonGame(TYPES.SCISSORS, "ss", "scissors");

    return [button1, button2, button3];
}