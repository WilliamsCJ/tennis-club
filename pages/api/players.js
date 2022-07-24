const { Prisma } = require('@prisma/client')
import prisma from '../../lib/prisma';


// Main /players function handler
export default async function handler(req, res) {
    if (req.method == "POST") {
        res.status(200)
    } else {
        res.status(405)
    }
}