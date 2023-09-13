import React from "react";

interface ProjectProps {
    name: string;
    description: string;
    githubLink: string;
    deployLink: string;
}

const Project: React.FC<ProjectProps> = ({
    name,
    description,
    githubLink,
    deployLink,
}) => {
    const openDeployLink = () => {
        window.open(deployLink, "_blank");
    };

    return (
        <div className="project-card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="project-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <button onClick={openDeployLink}>Open Project</button>
            </div>
        </div>
    );
};

export default Project;
