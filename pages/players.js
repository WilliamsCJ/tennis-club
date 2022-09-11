import { React, useState } from 'react';

import prisma from '../lib/prisma';

import Button from '../components/general/Button';
import Error from '../components/general/Error';
import Header from '../components/general/Header';
import NewPlayer from '../components/players/NewPlayer';
import PlayersTable from '../components/players/PlayersTable';

export async function getServerSideProps() {
  let data, error = null;

  try {
    data = await prisma.players.findMany({
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
    
    data.forEach(function(user) {
        user.fullname = [user.forename, user.middlenames, user.surname].join(' ');
        user.phone_numbers = user.player_phones.map(function(phone) {
            return phone.phone_number;
        }).join(", ");

        delete user.forename;
        delete user.middlenames;
        delete user.surname;
        delete user.player_phones;
    })
} catch(e) {
  log.error("Couldn't fetch players")
  log.error(e)
  error = "An unknown error occurred."
}

  return {props: { data, error }}
}

/**
 * Players page (/players) that displays player contact details. Uses view_contact_details.
 */
export default function Players({ data, error }) {
    // NewPlayer modal open/close state.
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="sm:flex sm:items-center">
          <Header title={"Players"} description={"A list of all player contact details"}/>

          <Button text={"Add player"} onClick={() => setIsOpen(true)} />
        </div>

        {/* Render error message if we can't fetch player contact detail records. */}
        {error && <Error message={"Couldn't load players."}/>}

        {/* Render table of contact details */}
        <PlayersTable data={data} />
        
        {/* NewPlayer modal/popup */}
        {/* TODO: Add mock mutate for optimistic UI */}
        <NewPlayer open={isOpen} setOpen={setIsOpen} />
    </div>
    )
}
