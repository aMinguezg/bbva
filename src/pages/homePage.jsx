import React from 'react';
import Login from '../components/forms/login';

const HomePage = () => {

    return (
        <section>
            <h1>Enter player name</h1>
            <Login destination='/game'></Login>
        </section>
    );
};


export default HomePage;

