import Header from '@compoadmin/header'
import Sidemenu from '@compoadmin/sidemenu'

import style from "@styles/admin/layout.module.css"

export const metadata = {
    title: 'Administration - Mon Application',
    description: 'Panneau d\'administration',
}

export default function AdminLayout({ children }) {
    return (
        <div className={style.adminlayout}>
            <Header/>
            <div className={style.admin}>
                <Sidemenu/>
                <div className={style.admin_body}>{children}</div>
            </div>
        </div>
    )
}