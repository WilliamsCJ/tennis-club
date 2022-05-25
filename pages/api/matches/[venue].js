import prisma from '../../../lib/prisma';

export default async function handler({ query: { venue } }, res) {  
  try{
    let result = await prisma.matches.findMany({
      where: {
        venue_name: venue
      },
      orderBy: {
        date_played: 'desc'
      },
      select: {
          id: true,
          date_played: true,
          court_number: true,
          players_matches_p1_emailToplayers: {
            select: {
              forename: true,
              middlenames: true,
              surname: true,
            }
          },
          players_matches_p2_emailToplayers: true,
          sets: {
            orderBy: {
              set_number: 'asc',
            },
            select: {
              set_number: true,
              p1_games_won: true,
              p2_games_won: true
            }
          },
          courts: {
            select: {
              surface: true,
              notes: true
            } 
          }
      }
    })
    res.status(200).json(result);
  } catch(e) {
    let message;
    console.log(e)

    if (e.code === 'P2002') {
        message = "Couldn't find a venue with that name."
    } else {
        message = "An unknown error occurred."
    }
    res.status(500).json({message: message});
  }
}