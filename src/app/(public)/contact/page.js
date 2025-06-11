"use client"

import style from "@styles/public/contact.module.css"

export default function Contact() {

    const onSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)
        console.log(formData.get("email"))
        console.log(formData.get("sujet"))
    }

    return (
        <section className={style.contact}>
            <h1>Formulaire de contact</h1>
            <form className={style.form} onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="email">Votre email</label>
                    <input type="text" name="email"/>
                </div>
                <div className="group">
                    <label htmlFor="sujet">Sujet</label>
                    <input type="text" name="sujet"/>
                </div>
                <div className="group">
                    <label htmlFor="message">Votre message</label>
                    <textarea name="message"></textarea>
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
            </form>
        </section>
    );
}