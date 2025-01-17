import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

function ProjectList() {
    const { data: projects, loading, error } = useFetch('http://localhost:3000/projects');
    const [openProject, setOpenProject] = useState(null);

    if (loading) {
        return (<div className='loading'><p>Loading data, please wait...</p></div>);
    }

    if (error) {
        return (<div className="error"><p>Error: {error}</p></div>);
    }

    const toggleProjectDetails = (id) => {
        setOpenProject(openProject === id ? null : id);
    };

    return (
        <div>
            <br></br>
            <div className="projects">
                {projects && projects.map((project) => (
                    <div key={project.id} className="project">
                        <h2>{project.title}</h2>
                        <button onClick={() => toggleProjectDetails(project.id)}>
                            {openProject === project.id ? 'Hide Details' : 'Show Details'}
                        </button>
                        {openProject === project.id && (
                            <div>
                                <p>{project.description}</p>
                                <img src={project.image} alt={project.title} className='project-image' />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;