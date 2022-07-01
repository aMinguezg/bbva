import React from 'react';
import Login from '../components/forms/login';
import Header from '../components/header/header';
import '../styles/home-style.scss';

const HomePage = () => {

    return (
        <section className='home-main-section'>
            <Header></Header>
            <h1>Enter player name</h1>
            <Login destination='/game'></Login>
        </section>
    );
};


export default HomePage;

