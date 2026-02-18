import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@models/index'

const User = db.User


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "CocktailAuth",
            credentials: {
                email: {label: "E-mail", type: "email", placeholder: "Votre email"},
                password: {label: "Mot de passe", type:"password"}
            },
            async authorize(credentials){
                // console.log("AUTHORIZE CREDENTIALS")
                // console.log(credentials)

                try{
                    let user = await User.findOne({where: {email: credentials.email}, raw: true})

                    if(user && await User.checkPassword(credentials.password, user.password)){
                        return user
                    }
                }catch(err){
                    // console.log(err)
                    return null
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user}){
            console.log("CALLBAK JWT")
            console.log(token)
            console.log(user)

            if(user){
                token.truc = "chose"
            }
            console.log(token)
            return token
        },
        async session({session, token}){
            console.log("CALLBACK SESSION")
            console.log(session)
            console.log(token)

            if(token){
                session.truc = "chosetruc"
            }
        }
    },
    pages:{
        signIn: '/login'
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
        udpateAge: 10 * 60
    },
    jwt: {
        maxAge: 60 * 60
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}