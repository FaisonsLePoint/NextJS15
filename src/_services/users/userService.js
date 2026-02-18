import db from "@models/index"

export async function getAllUsers(){
    try{
        return await db.User.findAll({raw: true})
    }catch(err){
        console.error("Erreur de récupération des utilisateurs")
        throw new Error("Impossible d'avoir les utilisateur")
    }
}