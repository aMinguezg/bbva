import { render, screen } from '@testing-library/react'
import App from './App'

test('Form is in the document', () => {
    render(<App />)
    //Login
    const loginForm = screen.getByTestId('login-form')
    expect(loginForm).toBeInTheDocument()
})

test('Header is in the document', () => {
    render(<App />)
    // Header
    const gameButton = screen.getByTestId('header')
    expect(gameButton).toBeInTheDocument()
})
