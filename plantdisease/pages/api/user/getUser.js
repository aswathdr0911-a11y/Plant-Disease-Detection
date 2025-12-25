import { withAuth } from "@/utils/middleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default withAuth(async (req, res, userId) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed"});
    }

    try {
        console.log("User Id", userId);
        const userData = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true,
                plantHistory: true
            }
        });
        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(userData)
    } catch (error) {
        console.log("User fetch error:", error);
        return res.status(500).json({ error: "Failed to retrieve user information" });
    }
});