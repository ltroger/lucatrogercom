import React from 'react';
import ProjectList from './ProjectList';

const Home = () => {
    return (
        <main>
            {/* <img src="../images/logo.svg"></img> */}
            <h1>Home</h1>
            <p>Hier finden Sie eine Übersicht meiner Projekte</p>
            <ProjectList />
        </main>
    );
};

export default Home;