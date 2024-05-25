import { React, useState } from 'react';
import useSWR, { useSWRConfig} from 'swr';

import fetcher from '../lib/fetcher';
import prisma from '../lib/prisma'

import DropDown from '../components/matches/Dropdown';
import MatchCard from '../components/matches/MatchCard';
import NewMatch from '../components/matches/NewMatch';

import Button from '../components/general/Button';
import ErrorBanner from '../components/general/Error';
import Header from '../components/general/Header';

export async function getServerSideProps() {
  let venues, error = null;

  try{
    venues = await prisma.venues.findMany();
} catch(e) {
    error = "An unknown error occurred."
}

  return { props: { venues, error }}
}

/**
 * Matches page (/matches). Shows matches by venue in a user-friendly card format.
 */
export default function Matches({ venues, error }) {
  // Selected venue state.
  const [selectedVenue, setSelectedVenue] = useState(null);

  // SWR hooks for fetching venue and match records.
  const { data: matches, error: matchesError } = useSWR('/api/matches/' + (selectedVenue !== null ? selectedVenue.name : ""), fetcher)

  // useSWRConfig hook to manually mutate (aka revalidate) match data when we've created a new record.
  const { mutate } = useSWRConfig()

  // NewMatch modal open/close state.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 mb-8">

      {/* Page title and button */}
      <div className="sm:flex sm:items-center">
        <Header title={"Matches"} description={"A historical record of matches by venue."} />
        <Button text={"Add new match"} onClick={() => setIsOpen(true)}/>
      </div>

      {/* Render error message if we can't query the matches for a given venue. */}
      {error &&
        <ErrorBanner message={"Couldn't load venues."}/>
      }

      {/* Venues selector. Only render if the venues query has returned. */}
      {venues &&
        <div className="mt-4">
          <DropDown options={venues} selected={selectedVenue} setSelected={setSelectedVenue} />
        </div>
      }

      {/* Render error message if we can't query the matches for a given venue. */}
      {matchesError && selectedVenue &&
        <ErrorBanner message={"Couldn't load matches."}/>
      }

      {/* Once queried successfully, render the matches as a list of cards. */}
      {matches && 
        <ul role="list" className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((match) => (
            <MatchCard match={match} />
          ))}
        </ul>
      }

      {/* Render modal last as it isn't open by default */}
      <NewMatch open={isOpen} setOpen={setIsOpen} mutate={mutate} venues={venues} /> 
    </div>
  )
}
