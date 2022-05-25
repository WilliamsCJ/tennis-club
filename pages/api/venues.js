import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    try{
        const venues = await prisma.venues.findMany();
        res.status(200).json(venues);
    } catch(e) {
        let message = "An unknown error occurred."
        res.status(500).json({message: message});
    }
}