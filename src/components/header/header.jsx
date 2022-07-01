import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/header-style.scss'

const Header = ({ playerName }) => {
    const navigate = useNavigate()

    const goBack = function () {
        navigate(-1)
    }
    return (
        <header className="header-component" data-testid="header">
            <img
                src="https://bbvaengineering.github.io/challenges/assets/images/bbva.png"
                alt=""
            />
            {playerName ? <p>Hi {playerName}</p> : ''}
            {playerName ? (
                <button onClick={goBack}>
                    <i className="bi bi-box-arrow-right"></i>
                </button>
            ) : (
                ''
            )}
        </header>
    )
}

export default Header
