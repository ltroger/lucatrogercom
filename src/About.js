import React from 'react';

const About = () => {
    return (
        <main>
            <div className='about-wrapper'>
                <h1>Hello, I'm Luca</h1>
                <div className='about'>
                    <img src="./images/about.jpg" alt='about-image'></img>
                    <div className='about-text'>
                        <h2>Nice to meet you</h2>
                        <p>I'm a Web Developer and Designer from Austria.
                            I'm very passionate about all things Web. Be it Web Design or Development, I'm your man. I am currently attending Salzburg University of Applied Sciences in the Web Development Department. If you have any questions or inquiries regarding me, send me a message via the contact page!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;