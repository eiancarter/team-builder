import React, { useState } from 'react';


const TeamForm = props => {
    const [team, setTeam] = useState({
        name: '',
        email: '',
        title: ''
    });
    const handleChanges = e => {
        setTeam({
            ...team,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({ name: '', email: '', title: ''});
    };

    return (
        <form className='team-form' onSubmit = {submitForm}>
            <label htmlFor='Name'>Name</label>
            <input 
                id='name'
                type='text'
                placeholder='name'
                onChange={handleChanges}
                name='name'
                value={team.name}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='text'
                name='email'
                placeholder='email'
                onChange={handleChanges}
                value={team.email}
            />
            <label htmlFor='title'>Title</label>
            <input
                id='title'
                type='text'
                name='title'
                placeholder='title'
                onChange={handleChanges}
                value={team.title}
            />
            <button type='submit'>Add Team Member</button>
        </form>
    );
};

export default TeamForm;