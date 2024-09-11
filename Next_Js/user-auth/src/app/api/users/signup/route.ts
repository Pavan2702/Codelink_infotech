import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'


Connect()

export async function POSR(request: NextRequest) {
    try {
        const requestNody = await request.json()
        const { name, email, password } = requestNody
        console.log("🚀 ~ POSR ~ requestNody:", requestNody)

        const verUser = await User.findOne({email})

        if (verUser) {
            return NextResponse.json({error:'User already register'},{status:400})
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message },
            { status: 500 }
        )
    }

}