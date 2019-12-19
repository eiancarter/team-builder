import React, { useState } from 'react';

import './App.css';
import TeamCard from './TeamCard';
import TeamForm from './TeamForm';

function App() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: 'Michael Scott',
      email: 'bestboss@dmifflin.com',
      title: 'Office Manager'
    }
  ]);
  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      title: team.title
    };
    setTeams([...teams, newTeam]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dunder Mifflin Paper Company Roster</h1>
      </header>
      <div className='box'>
        <TeamCard teams={teams} />
        <br></br>
        <TeamForm addNewTeam={addNewTeam} />
      </div>
    </div>
  );
}


export default App;
