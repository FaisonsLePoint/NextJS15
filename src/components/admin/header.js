"use client"

import style from '@styles/admin/header.module.css'

const Header = () => {

    const logout = () => {
        console.log('LOGOUT')
    }

    return (
        <div className={style.header}>
            Header Admin
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Header;