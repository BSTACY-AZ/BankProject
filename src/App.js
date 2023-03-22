import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import Balance from './balance';
import AllData from './alldata';

export const UserContext   = React.createContext({
  users: [{
    name:'defaultuser', 
    email: 'default@default.com', 
    password: 'DFS)(Uqadfasfda234##', 
    balance: 0, 
    loggedIn: 0,
    setUsers: () => {}
  }]});


export default function App() {

  

  const [users, setUsers] = React.useState({users: [{name:'defaultuser', email: 'default@default.com', password: 'DFS)(Uqadfasfda234##', balance: 0, loggedIn: 0}]});
  




 return(
    <HashRouter>
      <UserContext.Provider value={[users, setUsers]} >
      <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount /> } />
            <Route path="/login/" element={<Login />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/balance/" element={<Balance />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
      </UserContext.Provider>
    </HashRouter>
);

}


