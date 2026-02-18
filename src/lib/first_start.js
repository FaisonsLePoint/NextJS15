/************************/
/* MODULE IMPORT */
import db from '@models/index'
const User = db.User

/*************************************/
/* CREATE FIRST ADMIN USER */
export default async () => {
    try{
        const test = await User.findAll()
        if(test.length == 0){
            await User.create({
                nom: 'Roger',
                prenom: 'Marcel',
                pseudo: 'Le fou',
                email: 'admin@roger.com',
                password: process.env.FIRST_ADMIN_PASSWORD
            })

            console.log('First user admin created')
            console.log('Email: admin@roger.com \n Password: '+process.env.FIRST_ADMIN_PASSWORD)
            console.log('### PLEASE CHANGE PASSWORD ###')
        }
    }catch(err){
        console.log(err)
    }
}