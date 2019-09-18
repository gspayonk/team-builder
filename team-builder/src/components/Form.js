import React, {useState} from 'react';
import styled from 'styled-components';

//styling button
const buttonStyle = styled.div `
    margin-top: 3%;
    `;


const Form = props => {

    console.log(props);
    const [member, setMember] = useState ({
        name: '',
        role: '',
        email: '',
        id: null
    });

const handleChanges = event => {
    setMember({...member, [event.target.name]: event.target.value});
    console.log(member);
}

const submitForm = event => {
    event.preventDefault();
    props.add({...member, id: Math.random()});

    setMember({name:'', role: '', email: '', id: null});
    console.log(event.target.value);
};

return (
    <form onSubmit = {submitForm}>

        <h1>Build Your Team!</h1>
        <h3>Add Member</h3>
        
        <div>
        <label htmlFor = 'name'>
        Name: {' '}
        <input
            type='text'
            name= 'name'
            onChange = {handleChanges}
            placeholder = 'Enter your name'
            value= {member.name}
        />
        </label>

        <label htmlFor='role'>
        Role: {' '}
        <input
            name='text'
            onChange = {handleChanges}
            placeholder = 'Enter your role'
            value = {member.role}
        />
        </label>

        <label htmlFor='email'>
        E-mail: {' '}
        <input
            name='text'
            onChange = {handleChanges}
            placeholder = 'Enter your e-mail'
            value = {member.email}
        />
        </label>
        </div>
        <button>Add Member</button>
    </form>
);
};

export default Form;