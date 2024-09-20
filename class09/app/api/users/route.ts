import { NextRequest, NextResponse} from "next/server";

const usersData = [
    {
        "name":"arif",
        "contactNum":"0365736478",
        "heading":"Project Manager"
    },

    {
        "name":"mumtaz",
        "contactNum":"03347685756",
        "heading":"Designer"
    },

    {
        "name":"sohail",
        "contactNum":"03127465443",
        "heading":"Developer"
    },

    {
        "name":"sohail",
        "contactNum":"03127465443",
        "heading":"Developer"
    },

]


export function GET(){
    return NextResponse.json(usersData)
}


export async function POST(request:NextRequest){
    const formData = await request.json()
    usersData.push(formData)

}