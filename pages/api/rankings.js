import prisma from "../../lib/prisma";

export default async function handler(req, res) {
    try{
      const rankings = await prisma.rankings.findMany();
      res.status(200).json(rankings);
    } catch(e) {
      let message = "An unknown error occurred."
      console.log(e)
      res.status(500).json({message: message});
  }
}