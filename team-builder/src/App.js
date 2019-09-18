import React from 'react';
import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import Member from './components/Member';

function App() {

  const [members, setMembers] = useState ([]);

  const enterMember = member => setMembers([...members, member]);

  const update = thisMember =>
    setMembers ([
      ...members.map(member => {
        if (member.id === thisMember.id){
          return thisMember;
        }
        return member;
      })
    ]);

    console.log(members);

  return (

    <div className="App">

      {members.map((member, index) => (
        <Member member = {member} key = {index} update = {update}/>
      ))}

      <Form add={enterMember}/>

    </div>
  );
}

export default App;
