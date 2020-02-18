import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar/index'
import SearchBar from './components/Search/index'
import DataArea from './components/DataArea/index'

function App() {
  const [serachTerm, setSearchTerm] = useState();


  // const handleSubmit = e => {
  //   e.preventDefault();
  //   API.getUsers()
  //   .then(res => )
  //   .catch(err => )
  // }

  return (
    <div className="App">
      <Nav />
      <SearchBar onChange={e => setSearchTerm(e.target.value)} />
      <DataArea />


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
