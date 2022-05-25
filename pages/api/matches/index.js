import prisma from '../../../lib/prisma';

export default async function handler(req, res) {  
    if (req.method === "POST") {
        let body = req.body;
        if (body.set3P1Games === '') {
            body.set3P1Games = null;
        }

        if (body.set3P2Games === '') {
            body.set3P2Games = null;
        }
        
        try {
            let result = await prisma.$executeRaw`CALL proc_add_match(${body.player1}, ${body.player2}, ${body.set1P1Games}, ${body.set1P2Games}, ${body.set2P1Games}, ${body.set2P2Games}, ${body.set3P1Games}, ${body.set3P2Games}, ${body.venue}, ${body.courtNumber}, ${body.datePlayed});`;
            res.status(200).json(result)
        } catch(e) {
            let message  = "Please check you have entered the right details."
            res.status(500).json({message: message});
        }

    } else {
        res.status(200)
    }
}