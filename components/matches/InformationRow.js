import { React } from 'react';

/**
 * Displays a given player's score for the match.
 */
export default function InformationRow({ player, sets, isP1, winner }) {
    return (
        <div className={`flex flex-row justify-between`}>
            {/* The players name */}
            <span>{player ? player.forename + ' ' + player.surname : "Anonymous"} <span>({winner ? "W" : "L"})</span></span>

            {/* The players scores for each set */}
            <div className={`${winner ? "font-bold" : ""} flex flex-row space-x-4`}>
            {sets.map((set, index) => {
                return (
                <span className="text-primary text-lg" key={index}>{isP1 ? set.p1_games_won : set.p2_games_won}</span>
                )
            })}
            </div>
        </div>
    )
}