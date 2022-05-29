const { Prisma } = require('@prisma/client')
import prisma from '../../lib/prisma';


// Main /players function handler
export default async function handler(req, res) {
    if (req.method == "POST") {
        const data = req.body;
        console.log(data);
    
        let phones = [];
        phones.push({ phone_number: data.phone1, phone_type: data.phoneType1});
    
        if (data.phone2 !== null) {
            phones.push({ phone_number: data.phone2, phone_type: data.phoneType2});
        }
    
        if (data.phone3 !== null) {
            phones.push({ phone_number: data.phone3, phone_type: data.phoneType3});
        }
    
    
        try{
            const result = await prisma.players.create({
                data: {
                    email: data.email,
                    forename: data.firstName,
                    middlenames: data.middleNames,
                    surname: data.lastName,
                    date_of_birth: new Date(data.dob),
                    player_phones: {
                        create: phones
                    },
                }
            })
    
            res.status(200).json(result);
        } catch(e) {
            let message;
            console.log(e)
            if (e.code === 'P2002') {
                message = "A user with this email already exists."
            } else {
                message = "An unknown error occurred."
            }
            res.status(500).json({message: message});
        }
    } else {
        res.status(400) // TODO: Change to Bad Method code.
    }
}