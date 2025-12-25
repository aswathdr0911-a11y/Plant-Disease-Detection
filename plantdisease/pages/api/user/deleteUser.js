import { withAuth } from "@/utils/middleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default withAuth(async (req, res, userId) => {
    if (req.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed"});
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { id: userId }
        });
        if (!existingUser) {
            return res.status(404).json({ error: 'User not found'})
        }

        await prisma.user.delete({
            where: { id: userId }
        });

        return res.status(200).json({ message: "Account successfully deleted" })
    } catch (error) {
        console.log("Delete user error:", error);
        return res.status(500).json({ error: "Failed to delete user" });
    }
});