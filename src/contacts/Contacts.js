import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsBlock}`}>
                <h2>Контакты</h2>
                <form className={style.form}>
                    <input type="text"></input>
                    <input type="text"></input>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
