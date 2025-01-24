import React from 'react';
import ProjectList from './ProjectList';

const Home = () => {
    return (
        <main>
            <header>
                <img src="../images/logo1.svg"></img>
                <div className='header-text'>
                    <h1>Luca Troger</h1>
                    <p>Web Developer & Designer</p>
                </div>
            </header>
            <ProjectList />
        </main>
    );
};

export default Home;