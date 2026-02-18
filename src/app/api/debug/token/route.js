import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export async function GET(request){
    try{
        const token = await getToken({req: request})

        console.log("Token décodé: ", token)
        console.log("Headers: ", request.headers.get("cookie"))

        const cookieHeader = request.headers.get("cookie")
        const tokenRaw = cookieHeader?.match(/next-auth\.session-token=([^;]+)/)?.[1]

        return NextResponse.json({
            token: token,
            tokenRaw: tokenRaw
        })
    }catch(err){
        return NextResponse.json({error: err.message}, {status: 500})
    }

}