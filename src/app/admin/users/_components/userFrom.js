"use client"

import { useActionState } from "react"

import { addUser, updateUser } from "@services/users/userAction"

export default function UserForm({mode, user}){

    const actionToUse = mode == "add" ? addUser : updateUser
    const [state, userAction, isPending] = useActionState(actionToUse, {})

    return (
        <form key={user?.id ?? 'new'} action={userAction}>
            {mode == "edit" && user && (
                <input type="hidden" name="id" value={user.id}/>
            )}
            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" defaultValue={user?.nom ?? ''}/>
            </div>
            <div>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name="prenom" defaultValue={user?.prenom ?? ''}/>
            </div>
            <div>
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" id="pseudo" name="pseudo" defaultValue={user?.pseudo ?? ''}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" defaultValue={user?.email ?? ''}/>
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input type="text" id="password" name="password" defaultValue={user?.password ?? ''}/>
            </div>
            <button type="submit" disabled={isPending}>
                {mode == "add" ? "Ajouter" : "Modifier"}
                {isPending && (
                    <span> ... EN COURS</span>
                )}
            </button>
            <p>&nbsp;</p>
            {state?.message && (
                <p>{state.message}</p>
            )}
            {state?.error && (
                <p>{state.error}</p>
            )}
        </form>
    )
}