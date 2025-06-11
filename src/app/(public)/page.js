import style from "@styles/public/home.module.css"

export default function Home() {
    return (
        <section className={style.home}>
            <h1>Gestionnaire de Cocktail</h1>
            <p>Fait avec NextJS 15</p>
        </section>
    );
}