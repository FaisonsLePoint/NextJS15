import { NextResponse } from "next/server"
import withAuth from "next-auth/middleware"

export function middleware(request){

    const { pathname } = request.nextUrl

    // Fermeture des routes de la partie admin
    if(pathname.startsWith('/admin')){
        console.log("Dans le if du middleware si admin")
        return withAuth(request)
    }

    return NextResponse.next()

}

export const config = {
    matcher: ["/admin/:path*"]
}