import React, {useState} from 'react';


const Member = props => {
    const {name, email, role, id} = props.member;

    const[member, setMember] = useState({
        name: name,
        email: email,
        role: role,
        id: id
    });

    const [newMember, setNewMember] = useState(false);
    
    const handleAddition = event => {
        setNewMember(!newMember);
    };

    const inputHandler = event => {
        console.log(inputHandler)
        setMember({...member, [event.target.name]: event.target.value});
    };

    const handleNewMember = event => {
        event.preventDefault();
        props.update(member);
        setNewMember(false);
    };

    return newMember ? (
        <form onSubmit={handleNewMember}>
        <h1>Add Member</h1>
        <div>
            <label htmlFor="Name">
                Name:{" "}
            <input
                type="text"
                value={member.name}
                onChange={handleNewMember}
                name="name"
            />
            </label>

            <label htmlFor="Email">
                Email:{" "}
            <input
                type="text"
                value={member.email}
                onChange={inputHandler}
                name="email"
            />
            </label>

        <label htmlFor="Role">
            Role:{" "}
        <input
            type="text"
            value={member.role}
            onChange={inputHandler}
            name="role"
        />
        </label>

        </div>
        <button>Add Member</button>
    </form>
    ) : (
        <div>
            <h3>Name</h3>
            <p>{name}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Role</h3>
            <p>{role}</p>
            
            <button onClick = {handleAddition} >Edit Member Info </button>
        </div>
        );
    
};

export default Member;