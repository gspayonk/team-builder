import React, {useState} from 'react';
import Form from './Form';

const Member = props =>{
    const {name, role, email, id} = props.member;

    const[member, setMember] = useState({
        name: name,
        role: role,
        email: email,
        id: id
    });

    const [newMember, setNewMember] = useState(false);
    
    const handleAddition = event => {
        setNewMember(!newMember);
    };

    const inputHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
        console.log(inputHandler)
    };

    const handleUpdate = event => {
        event.preventDefault();
        props.update(member);
        setNewMember(false);
    };

    return newMember ? (
        <Form />) : (
        <div>
            <h3>Name</h3>
            <p>{name}</p>
            <h3>Role</h3>
            <p>{role}</p>
            <h3>Email</h3>
            <p>{email}</p>
            
            <button onClick={handleAddition}>Edit</button>
        </div>
        );
    
}

export default Member;