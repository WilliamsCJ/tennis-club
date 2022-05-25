export default async function handler(req, res) {  
  try{
    let result = await prisma.courts.findMany({})
    res.status(200).json(result);
  } catch(e) {
    let message = "An unknown error occurred.";
    res.status(500).json({message: message});
  }
}