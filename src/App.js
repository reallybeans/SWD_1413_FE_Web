import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import usersApi from './api/usersApi';
function App() {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
  const fetchUsersList = async () => {
  try {
  // const params = { _page: 1, _limit: 10 };
  const response = await usersApi.getAll();
  console.log(response);
  // setUsersList(response);
  } catch (error) {
  console.log('Failed to fetch product list: ', error);
  }
  }
  fetchUsersList();
  }, []);
  // return <UserList userList={userList} />;

  return (
    <div className="App">
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
