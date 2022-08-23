import { React } from 'react';
import Error from '../components/general/Error';
import Header from '../components/general/Header';
import RankingsTable from '../components/rankings/RankingsTable';

import prisma from '../lib/prisma'

export async function getServerSideProps() {
  let data, error = null;

  try{
      data = await prisma.players.findMany({
        select: {
          forename: true,
          middlenames: true,
          surname: true,
          elo: true,
          _count: {
            select: { 
              matches_matches_p1_emailToplayers: true,
              matches_matches_p2_emailToplayers: true
            },
          },
        },
      });

      data.forEach(function(player) {
          player.fullname = [player.forename, player.middlenames, player.surname].join(' ');
          player.played = player._count.matches_matches_p1_emailToplayers + player._count.matches_matches_p2_emailToplayers;
  
          delete player.forename;
          delete player.middlenames;
          delete player.surname;
      })
    } catch(e) {
      error = "An unknown error occurred."
  }

  return {props: { data, error } }
}

export default function Rankings({ data, error }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="sm:flex sm:items-center">
          <Header title={"Rankings"} description={"Player ELO rankings."}/>
        </div>

        {/* Render error message if we can't fetch player rankings. */}
        {error && <Error message={"Couldn't load rankings."}/>}

        {/* Render table of contact details */}
        <RankingsTable data={data} />
    </div>
  )
}