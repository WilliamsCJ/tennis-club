import { React, useState } from 'react';
import Divider from './Divider';
import InformationRow from './InformationRow';
import p1IsWinner from '../../lib/matches';
import NotesModal from '../general/NotesModal';
import Ping from '../notifications/Ping';

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function MatchCard({match}) {
    let [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <li
            key={match.id}
            className="col-span-1 flex flex-col text-primary text-center bg-white rounded-lg shadow space-y-4 p-4"
        >
            {/* Match date and court number at top of card */}
            <div className="flex flex-row justify-between text-gray-400 font-light text-sm">
                <span>MATCH</span>
                <span>{new Date(match.date_played).toDateString()}</span>
            </div>

            {/* P1 and P2 Rows with divider*/}
            <div className="flex-flex col space-y-4 items-end">
                <InformationRow player={match.players_matches_p1_emailToplayers} sets={match.sets} isP1={true} winner={p1IsWinner(match)}/>
                <Divider />
                <InformationRow player={match.players_matches_p2_emailToplayers} sets={match.sets} isP1={false} winner={!p1IsWinner(match)}/>
            </div>

            {/* Court number and surface */}
            <div className="flex flex-row justify-between text-gray-400 font-light text-sm">
                {/* If there are notes on the court, render a notification icon for notes */}
                {match.courts.notes ? 
                    <a onClick={() => setModalIsOpen(true)} className='cursor-pointer'>
                        COURT {match.court_number}   
                        <Ping />                     
                    </a>
                :
                    <span>COURT {match.court_number}</span>
                }
                <span>{match.courts.surface.toUpperCase()}</span>
            </div>

            {/* Only render modal in background if there are notes. */}
            {match.courts.notes && <NotesModal title="Notes" notes={match.courts.notes} open={modalIsOpen} setOpen={setModalIsOpen} /> }
        </li>
    )
}