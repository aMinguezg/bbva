import { RESULTS } from '../models/results'
import { getUserPoints, incrementScore } from './local-storage'
import { randomIntFromInterval } from './utils'

export const getInitialPoints = function (name) {
    return getUserPoints(name)
}

export const startGame = function (value, setValues, setResultMessage) {
    setValues([value, ''])
    setResultMessage('')
}

export const setMachineValue = function (values, setValues) {
    const availableResults = ['rock', 'paper', 'scissors']

    const tempArray = [...values]
    tempArray[1] = availableResults[randomIntFromInterval(0, 2)]
    setTimeout(() => {
        setValues(tempArray)
    }, 1000)
}

export const getGameResult = function (values) {
    if (values[0] === values[1]) return 0
    else if (values[0] === 'paper' && values[1] === 'rock') return 1
    else if (values[0] === 'rock' && values[1] === 'scissors') return 1
    else if (values[0] === 'scissors' && values[1] === 'paper') return 1

    return -1
}

export const setScoreResult = function (name, result, score, setScore) {
    if (result === 1) {
        incrementScore(name, result)
        setScore(score + 1)
    }
}

export const getMessageResult = function (result) {
    switch (result) {
        case 0:
            return RESULTS.TIE
        case 1:
            return RESULTS.WIN
        default:
            return RESULTS.DEFEAT
    }
}
