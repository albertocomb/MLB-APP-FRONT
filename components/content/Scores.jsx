import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function Scores() {
    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
            .then(response => {
                const data = response.data;
                setGamesData(data.dates[0].games);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data from API', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading data...</p>;
    }

    return (
        <div>
            <p>This is the scores page. Here you can see the game results.</p>
            <ul>
                {gamesData.map(game => (
                    <li key={game.gamePk}>
                        {moment(game.gameDate).format('MMMM Do YYYY, h:mm a')} - {game.teams.home.team.name} vs {game.teams.away.team.name}
                        <br />
                        Status: {game.status.detailedState}
                        <br />
                        Result: {game.teams.home.isWinner ? 'Won' : 'Lost'}
                        <br />
                        Points:
                        {game.teams.home.isWinner
                            ? `${game.teams.home.score} (Home) - ${game.teams.away.score} (Away)`
                            : `${game.teams.away.score} (Away) - ${game.teams.home.score} (Home)`}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Scores;
