"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

import style from "@styles/admin/login.module.css"

export default function Login() {

    const router = useRouter()
    const searchParams = useSearchParams()
    
    const callBackUrl = searchParams.get('callbackUrl') || '/'
    console.log("DEBUG CALLBACKURL : ", callBackUrl)

    const [error, setError] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        let email = formData.get('email')
        let password = formData.get('password')

        try{
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password
            })

            console.log("RESULT LOGIN", result)

            if(result.error){
                setError(true)
                return 
            }

            router.push(callBackUrl)

        }catch(err){
            console.log("DANS LE CATCH DU LOGIN")
            console.error(err)
        }
    }

    return (
        <section className={style.login}>
            <h1>Connexion</h1>
            <form className={style.form} onSubmit={onSubmit}>
                <div className={style.group}>
                    <label htmlFor="email">Identifiant</label>
                    <input type="text" name="email" />
                </div>
                <div className={style.group}>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className={style.group}>
                    {error && (
                        <div className={style.error}>Identifiant ou mot de passe incorrect</div>
                    )}

                    <button>Connexion</button>
                </div>
            </form>
        </section>
    )
}