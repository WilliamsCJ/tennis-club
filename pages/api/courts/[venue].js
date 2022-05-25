import prisma from '../../../lib/prisma';

export default async function handler({ query: { venue } }, res) {  
  if (venue === null) {
    res.status(200)
  }

  try{
    let result = await prisma.courts.findMany({
      where: {
        venue: venue
      },
      select: {
        court_number: true
      }
    })
    res.status(200).json(result);
  } catch(e) {
    let message;

    if (e.code === 'P2002') {
        message = "Couldn't find a venue with that name."
    } else {
        message = "An unknown error occurred."
    }
    res.status(500).json({message: message});
  }
}