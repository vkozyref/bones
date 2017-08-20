import { Component } from 'react';

const games = [
    {
        id: '123213-dfdsf-434',
        name: 'game1',
        participants: 3,
        creator: 'player2'
    },
    {
        id: 'fdsfdsf-23332-fdsf',
        name: 'game2',
        participants: 2,
        creator: 'player5'
    }
]

export default class GameList extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Creator</th>
                        <th>Participants</th>
                        <th></th>
                    </tr>
                    {games.map(game =>
                        <tr>
                            <td>{game.name}</td>
                            <td>{game.creator}</td>
                            <td>{game.participants}</td>
                            <td><a className="btn">Join</a></td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}