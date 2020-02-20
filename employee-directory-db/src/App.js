import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/index'
import SearchBar from './components/Search/index'
import DataArea from './components/DataArea/index'
import DataTable from './components/DataTable/index'
import API from "./utils/API"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [user, setUser] = useState({})

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    console.log(searchTerm);
  }, []);

  function loadUsers() {
    API.getUsers()
      .then(res => {
        setUsers(res)
        setUser(res[0])
      })
      .catch(err => console.log(err));
  }


  const handleInputChange = event => {
    setSearchTerm(event.target.value);
    API.getUser(searchTerm)
      .then(res => {
        setUsers(res)
        setUser(res[0])
      })
      .catch(err => console.log(err));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   API.getUsers()
  //   .then(res => )
  //   .catch(err => )
  // }
  // console.log(user.image === "undefined")
  // console.log(!user)

  return (
    <div className="App">
      <Nav />
      <SearchBar
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        results={searchTerm} />
      <DataArea />
      {
        !user.image
          ? null
          : <DataTable things={users} />
      }




      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
