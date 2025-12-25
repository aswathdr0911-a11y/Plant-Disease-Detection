import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import { generateToken } from "@/utils/token";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { email, password } = req.body;

    if (!email || ! password) {
        return res.status(400).json({ message: "Email and/or password not provided" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: {
                id: true,
                email: true,
                password: true,
                }
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = generateToken({ userId: user.id });

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                email: user.email,
                useername: user.useername
            }
        });
    } catch (error) {
        const errorMessage = error.message;
        console.error("Login Error:", error);
        res.status(500).json({ message: "Login failed" })
    }
}