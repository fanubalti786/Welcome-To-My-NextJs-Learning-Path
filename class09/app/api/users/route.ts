import { NextResponse} from "next/server";

const usersData = [
    {
        "name":"irfan",
        "rollNo":"36525"
    },

    {
        "name":"mumtaz",
        "rollNo":"43444"
    },

    {
        "name":"sohail",
        "rollNo":"3688"
    },
]


export function GET(){
    return NextResponse.json(usersData)
}