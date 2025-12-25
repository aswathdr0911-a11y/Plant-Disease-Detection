import { withAuth } from "@/utils/middleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default withAuth(async (req, res, userId) => {
    if (req.method !== "PUT") {
        return res.status(405).json({ message: "Method not allowed"});
    }

    try {
        const { username, email, plantHistory } = req.body;
        const updateUser = await prisma.user.update({
            where: { id: userId },
            data: {
                ...(username && { username }),
                ...(email && { email }),
                ...(plantHistory && { plantHistory })
            }
        });
        return res.status(200).json(updateUser)
    } catch (error) {
        console.log("Update user error:", error);
        return res.status(500).json({ error: "Failed to update user information" });
    }
});