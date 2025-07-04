import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "CocktailAuth",
            credentials: {
                email: {label: "E-mail", type: "email", placeholder: "Votre email"},
                password: {label: "Mot de passe", type:"password"}
            },
            async authorize(credentials){
                console.log("AUTHORIZE CREDENTIALS")
                console.log(credentials)

                return null
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}