const { Prisma } = require('@prisma/client')
import prisma from '../../lib/prisma';

// API handler for POST requests to create player
async function createPlayer(req, res) {
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
}

// API handle for GET requests to retrieve all players.
async function getAllPlayers(req, res) {
    try {
        const results = await prisma.players.findMany({
            select: {
                email: true,
                forename: true,
                middlenames: true,
                surname: true,
                player_phones: {
                    select: {
                        phone_number: true
                    }, 
                }
            },
            orderBy: {
                surname: 'asc',
            }
        })

        results.forEach(function(user) {
            user.fullname = [user.forename, user.middlenames, user.surname].join(' ');
            user.phone_numbers = user.player_phones.map(function(phone) {
                return phone.phone_number;
            }).join(", ");

            delete user.forename;
            delete user.middlenames;
            delete user.surname;
            delete user.player_phones;
        })
        console.log(results)
        res.status(200).json(results)
    } catch(e) {
        let message = "An unknown error occurred."
        res.status(500).json({message: message});
    }
}


// Main /players function handler
export default async function handler(req, res) {
    if (req.method == "POST") {
        await createPlayer(req, res);
    } else {
        await getAllPlayers(req, res);
    }
}