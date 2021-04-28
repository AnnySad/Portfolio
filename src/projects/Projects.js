import React from 'react'
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>PROJECTS</h2>
                <div className={style.projects}>
                    <Project titleP={"Page"}
                             description = {"Watch"}

                      title={"Project: "}
                             description = {"Description:   ..."}
                />
                    <Project titleP={"Page"}
                             description = {"Watch"}
                             title={"Project: "}
                             description = {"Description:     .... "}

                    />
                </div>

            </div>
        </div>
    );
}

export default Projects;
