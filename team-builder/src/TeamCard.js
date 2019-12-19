import React from 'react';

const TeamCard = props => {
    return (
        <div className='team-card'>
            {props.teams.map(team => (
                <div key={team.id}>
                    <h2>Name: {team.name}</h2>
                    <h2>Email: {team.email}</h2>
                    <h2>Title: {team.title}</h2>
                </div>
            ))}
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
};

export default TeamCard;