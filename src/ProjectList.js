import React, { useState } from 'react';

function ProjectList() {
    const projects = [
        {
            id: 1,
            title: "I'mposter",
            description: "I'mposter ist ein fiktives Soziales Netzwerk, speziell entwickelt für Freundesgruppen. Dieses Projekt wurde als Multimediaprojekt 1 an der FH Salzburg verwirklicht.",
            images: ["./images/Imposter/imposter4.png", "./images/Imposter/imposter1.png", "./images/Imposter/imposter2.png", "./images/Imposter/imposter3.png"]
        },
        {
            id: 2,
            title: "City Brew and Bites",
            description: "Eine Worpress Website für ein fiktionales Cafe, umgesetzt im CMS-Kurs and der FH-Salzburg.",
            images: ["./images/Cafe/cafe1.webp", "./images/Cafe/cafe2.webp", "./images/Cafe/cafe3.webp"]
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
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${project.title} ${index + 1}`}
                                        className="project-image"
                                    />
                                ))}
                            </div>
                            {/* <div className='popup-images'>
                                {project.images.map((image, index) => (
                                    <span>
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${project.title} ${index + 1}`}
                                        className="popup-image"
                                    />
                                    </span>
                                ))}
                            </div> */}
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;