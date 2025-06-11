import Link from "next/link";
import style from "@styles/public/header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <nav>
                <ul>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/cocktails">Cocktails</Link></li>
                    <li><Link href="/contact">Contact</Link></li> |
                    <li><Link href="#">&nbsp;Admin</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;