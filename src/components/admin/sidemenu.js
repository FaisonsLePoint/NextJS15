import Link from 'next/link'

import style from "@styles/admin/sidemenu.module.css"

const Sidemenu = () => {
    return (
        <div className={style.sidemenu}>
           <ul>
                <li><Link href="/">Accueil</Link></li>
                <li>&nbsp;</li>
                <li><Link href="/admin">Dashboard</Link></li>
                <li className={style.section}>
                    User
                    <ul>
                        <li><Link href="/admin/users">Liste</Link></li>
                        <li><Link href="/admin/user/add">Ajouter</Link></li>
                    </ul>
                </li>
                <li className={style.section}>
                    Cocktail
                    <ul>
                        <li><Link href="/admin/cocktails">Liste</Link></li>
                        <li><Link href="/admin/cocktails/add">Ajouter</Link></li>
                    </ul>
                </li>
           </ul>
        </div>
    )
}

export default Sidemenu