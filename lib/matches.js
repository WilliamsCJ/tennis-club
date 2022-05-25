/**
 * Calculates whether P1 was the winner of a given match.
 * @param match 
 * @returns Whether P1 was the winner of the match. 
 */
export default function p1IsWinner(match) {
  let p1_sets = 0;
  let p2_sets = 0;

  for(const set of match.sets) {
    if (set.p1_games_won > set.p2_games_won) {
      p1_sets += 1;
    } else {
      p2_sets += 1;
    }
  }

  return p1_sets > p2_sets;
}
  