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
            title: "Consumer Score",
            description: "An assignment from the Machine Learning Course, regarding consumer behaviour",
            images: "./images/ml.png"
        },
        {
            id: 3,
            title: "Funny Gnome Drawing",
            description: "This is a recent drawing of a gnome I made. He is a jolly fella",
            images: "./images/gnome.png"
        }
    ];

    const [openProject, setOpenProject] = useState(null);

    const toggleProjectDetails = (id) => {
        setOpenProject(openProject === id ? null : id);
    };

    return (
        <div>
            <br />
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <h2>{project.title}</h2>
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
                        </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;