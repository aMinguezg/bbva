import React, { useState, useEffect, useRef } from 'react'
import ButtonGameComponent from '../components/button-game/button-game'
import Header from '../components/header/header'
import { createButtons } from '../services/factory'
import {
    getGameResult,
    getMessageResult,
    startGame,
    setMachineValue,
    setScoreResult,
    getInitialPoints,
} from '../services/functionality'
import { useLocation } from 'react-router-dom'
import '../styles/game-style.scss'

const GamePage = () => {
    const state = useLocation().state
    const name = state.name

    const [buttons, setButtons] = useState(createButtons())
    const [values, setValues] = useState(['', ''])
    const [resultMessage, setResultMessage] = useState('')
    const [score, setScore] = useState(getInitialPoints(name) || 0)
    const isMounted = useRef(false)

    const getValueToStartGame = function (value) {
        if (!isMounted.current) isMounted.current = true

        startGame(value, setValues, setResultMessage)
    }

    useEffect(() => {
        if (!isMounted.current) return

        if (values[1]) {
            const result = getGameResult(values)

            setScoreResult(name, result, score, setScore)
            setResultMessage(getMessageResult(result))

            return
        }

        setMachineValue(values, setValues)
    }, [values])

    return (
        <section className="game-main-section">
            <Header playerName={name}></Header>
            <h1>Score: {score}</h1>
            <section className="game-btns-section">
                {buttons.map((button, index) => {
                    return (
                        <ButtonGameComponent
                            key={index}
                            buttonGame={button}
                            getValue={getValueToStartGame}
                        ></ButtonGameComponent>
                    )
                })}
            </section>

            <p>
                You: {values[0]} - Bot: {values[1]}
            </p>
            <p>{resultMessage}</p>
        </section>
    )
}

export default GamePage
