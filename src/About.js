import React from 'react';

const About = () => {
    return (
        <main>
            <div className='about-wrapper'>
                <div className='about'>
                    <h1>Über mich</h1>
                    <div className='about-text'>
                        <p>Ich bin Web-Entwickler und Grafik-Designer aus Tirol, Österreich.
                            Derzeit studiere ich MultimediaTechnology an der FH Salzburg im Fachbereich Web. Durch meinen Hintergrund im Grafikbereich habe ich ein besonderes Interesse an Frontend-Entwicklung und der Gestaltung von User-Interfaces.
                        </p>
                    </div>
                    <img src="./images/about.jpg" alt='about-image'></img>
                    <div className='credentials'>
                        <div className='section'>
                            <h2>Ausbildung</h2>
                            <p>2017 - 2022 | HTL Bau Informatik Design</p>
                            <p>2023 - 2026 | FH Salzburg</p>
                        </div>
                        <div className='section'>
                            <h2>Erfahrung</h2>
                            <p>2019 | Praktikum media.tel Kirchbichl</p>
                        </div>
                        <div className='section'>
                            <h2>Skills</h2>
                            <div className='section2'>
                                <h3>Kompetenzen</h3>
                                <ul>
                                    <li><p>Full Stack Development</p></li>
                                    <li><p>Grafikdesign</p></li>
                                    <li><p>Programmieren</p></li>
                                </ul>
                            </div>
                            <div className='section2'>
                                <h3>Programmiersprachen</h3>
                                <ul>
                                    <li><p>HTML/CSS/JS</p></li>
                                    <li><p>C#</p></li>
                                    <li><p>Ruby on Rails</p></li>
                                    <li><p>PHP</p></li>
                                </ul>
                            </div>
                            <div className='section2'>
                                <h3>Anwendungen</h3>
                                <ul>
                                    <li><p>Adobe Creative Suite</p></li>
                                    <li><p>Microsoft Office</p></li>
                                    <li><p>Blender</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;