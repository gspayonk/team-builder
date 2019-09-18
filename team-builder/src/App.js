import React from 'react';
// import logo from './logo.svg';
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

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
