"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import db from "@models/index"
import user from "@/models/user"

export async function addUser(prevState, formData){
    try{
        const data = Object.fromEntries(formData.entries())

        await db.User.create(data)
        revalidatePath("/admin/users")

    }catch(err){
        console.error("Erreur lors de l'ajout", err)
        return { success: false, error: "Erreur lors de l'ajout"}
    }

    redirect("/admin/users")
}

export async function updateUser(prevState, formData){
    try{
        const data = Object.fromEntries(formData.entries())

        // CHeck user exists
        const testUser = await db.User.findOne({where: {id: data.id}})
        if(testUser === null){
            return { success: false, error: "Cet utilisateur n'existe pas"}
        }

        // UPdate
        await db.User.update(data, { where: {id: data.id}})
        revalidatePath('/users/edit/'+data.id)

        return { success: true, message: "Utilisateur modifié"}
    }catch(err){
        console.error("Erreur lors de la modification", err)
        return { success: false, error: "Erreur lors de la modification"}
    }
}

export async function userDelete(uid){
    try{
        // Check
        if(!uid || isNaN(uid)){
            return {success: false, error: "Le paramètre n'est pas bon"}
        }

        await db.User.destroy({ where: {id:uid}})
        revalidatePath('/admin/users')

        return { success: true, message: "Suppression de l'utilisateur"}
    }catch(err){
        console.error("Erreur lors de la suppression", err)
        return { success: false, error: "Erreur lors de la suppression"}
    }
}