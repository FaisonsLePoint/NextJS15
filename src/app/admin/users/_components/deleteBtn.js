"use client"

import { useState, useTransition } from 'react'

import { userDelete } from '@services/users/userAction'

export function DeleteUser({uid}){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [userToDelete, setUserToDelete] = useState(null)
    const [isPending, startTransition] = useTransition()

    const handleDeleteCLick = (id) => {
        setUserToDelete(id)
        setIsModalOpen(true)
    }

    const handleModaleClose = () => {
        if(!isPending){
            setIsModalOpen(false)
            setUserToDelete(null)
        }
    }

    const handleConfirmDelete = () => {
        if(!userToDelete) return

        startTransition(async () => {
            try{
                const result = await userDelete(userToDelete)

                if(result.success){
                    // Close modal and clean
                    setIsModalOpen(false)
                    setUserToDelete(null)
                }else{
                    alert(result.error || "Erreur de suppr")
                }

            }catch(err){
                console.error("Erreur lors de la suppression", err)
                alert("Erreur lors de la suppression de l'utilisateur")
            }
        })
    }


    return(
        <>
            <button
                onClick={() => handleDeleteCLick(uid)}
                disabled={isPending}
            >SUPPR</button>

            {isModalOpen && (
                <div>
                    Modale de confirmation
                    <button onClick={() => handleConfirmDelete()}>Confirmer</button>
                    <button onClick={() => handleModaleClose()}>Annuler</button>
                </div>
            )}
            
        </>
    )
}