import React, { useState } from 'react';
import 'lightbox2/dist/css/lightbox.css';
import lightbox from 'lightbox2';

function ProjectList() {
    const projects = [
        {
            id: 1,
            title: "I'mposter",
            description: "I'mposter ist ein fiktives Soziales Netzwerk, speziell entwickelt für Freundesgruppen. Dieses Projekt wurde als Multimediaprojekt 1 an der FH Salzburg verwirklicht.",
            images: ["./images/Imposter/imposter4.png", "./images/Imposter/imposter1.png", "./images/Imposter/imposter2.png", "./images/Imposter/imposter3.png"],
            link: "https://users.multimediatechnology.at/~fhs50561/mmp1/Scripts/PHP/index.php"
        },
        {
            id: 2,
            title: "Burgeria",
            description: "Burgeria ist eine Website für ein fiktives Burgerrestaurant. Sie bietet den Nutzern die Möglichkeit, Essen zu bestellen, sowie einen Tisch zu reservieren. Dieses Projekt wurde als Multimediaprojekt 2a an der FH Salzburg umgesetzt.",
            images: ["./images/Burgeria/burgeria1.png", "./images/Burgeria/burgeria2.png", "./images/Burgeria/burgeria3.png"],
            link: "https://team-nebulak.projects.multimediatechnology.at/"
        },
        {
            id: 3,
            title: "City Brew and Bites",
            description: "Eine Worpress Website für ein fiktionales Cafe, umgesetzt im CMS-Kurs and der FH-Salzburg.",
            images: ["./images/Cafe/cafe1.webp", "./images/Cafe/cafe2.webp", "./images/Cafe/cafe3.webp"],
            link: "https://vm-tomato.multimediatechnology.at/"
        }
    ];

    const [openProject, setOpenProject] = useState(null);

    const toggleProjectDetails = (id) => {
        setOpenProject(openProject === id ? null : id);
    };

    return (
        <div>
            <div className="projects">
                <h2>Projekte</h2>
                {projects.map((project) => (
                    <div key={project.id} className="project" onClick={() => toggleProjectDetails(project.id)}>
                        {openProject === project.id}
                        <h3>{project.title}</h3>
                        <button onClick={() => toggleProjectDetails(project.id)}>
                            {openProject === project.id ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                        </button>
                        {openProject === project.id && (
                            <div>
                                <p>{project.description}</p>
                                <div className="project-images">
                                    {project.images.map((image, index) => (
                                        <a
                                            key={index}
                                            href={image}
                                            data-lightbox={`project-${project.id}`}
                                            data-title={`${project.title} ${index + 1}`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${project.title} ${index + 1}`}
                                                className="project-image"
                                            />
                                        </a>
                                    ))}
                                </div>
                                <strong>Link: </strong>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;