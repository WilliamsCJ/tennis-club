import { React, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

import Button from '../components/general/Button';
import Error from '../components/general/Error';
import Header from '../components/general/Header';

import NewPlayer from '../components/players/NewPlayer';
import PlayersTable from '../components/players/PlayersTable';

import fetcher from '../lib/fetcher';

/**
 * Players page (/players) that displays player contact details. Uses view_contact_details.
 */
export default function Players() {
    // useSWR hook for fetching players data.
    const { data, error } = useSWR('/api/players', fetcher)

    // useSWRConfig hook to manually mutate (aka revalidate) player data when we've created a new record.
    const { mutate } = useSWRConfig()

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
        <NewPlayer open={isOpen} setOpen={setIsOpen} mutate={mutate} />
    </div>
    )
}
