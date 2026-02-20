import db from "@models/index"

export async function getAllUsers(){
    try{
        return await db.User.findAll({raw: true})
    }catch(err){
        console.error("Erreur de récupération des utilisateurs")
        throw new Error("Impossible d'avoir les utilisateur")
    }
}

export async function getUserById(uid){
    try{
        return await db.User.findByPk(uid, {raw: true})
    }catch(err){
        console.error("Erreur de récupération l'utilisateur")
        throw new Error("Impossible d'avoir les informations de l'utilisateur")
    }
}