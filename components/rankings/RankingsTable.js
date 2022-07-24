import { React } from 'react';
import Skeleton from '../tables/Skeleton';
import { TableRow, TableHeader } from '../tables/Tables';

/**
 * Rankings table. Using win_count view.
 * Modified from example at: https://tailwindui.com/components/application-ui/lists/tables 
 */
 export default function RankingsTable({data}) {
  return (
    <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        {/* Always render the table header, so skeleton can act as placeholder during loading */}
        <TableHeader column1="Full Name" column2="ELO" column3="Played" />

        {/* If we don't have data yet, render the skeleton. */}
        {!data && <Skeleton />}

        {/* Once we fetched the data, render the table body. */}
        {data &&
          <tbody className="overflow-auto divide-y divide-gray-200 bg-white">
            {/* Map each player in data to TableRow */}
            {data && data.map((player, index) => (
              <TableRow 
                key={index} 
                col2="ELO"
                col3="Played"
                val1={player.fullname}
                val2={player.elo}
                val3={player.played}
              />
            ))}
          </tbody>
          }   
      </table>
    </div>
  )
}