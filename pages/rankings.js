import { React } from 'react';
import useSWR from 'swr';
import Error from '../components/general/Error';
import Header from '../components/general/Header';
import RankingsTable from '../components/rankings/RankingsTable';

import fetcher from '../lib/fetcher';

export default function Rankings() {
    // useSWR hook for fetching players data.
    const { data, error } = useSWR('/api/rankings', fetcher)

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-8 mb-8">
        <div className="sm:flex sm:items-center">
          <Header title={"Rankings"} description={"Player ELO rankings and wins."}/>
        </div>

        {/* Render error message if we can't fetch player rankings. */}
        {error && <Error message={"Couldn't load rankings."}/>}

        {/* Render table of contact details */}
        <RankingsTable data={data} />
    </div>
  )
}