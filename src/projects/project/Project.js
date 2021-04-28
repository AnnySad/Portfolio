import React from 'react'
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.projectLogo}>
                <p>{props.titleP}</p>
                <button><a href={''}>Watch</a></button>
            </div>
            <div className={style.information}>
                <h4>{props.title}</h4>

                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;
