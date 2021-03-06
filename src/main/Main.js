import React from 'react'
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {TypedReactDemo} from "./text";

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>Hi There</span>
                <h1>I am Anny Sadovskaya</h1>
                <p>
                    <TypedReactDemo
                        strings={[
                            'Frontend Developer.',
                            'React Developer.',
                            'летим...',
                            'Frontend Developer.',
                            'React Developer.',
                            'летим...'
                        ]}
                    />
                </p>

            </div>
            <div className={style.photo}>photo</div>
            </div>
        </div>
    );
}

export default Main;
