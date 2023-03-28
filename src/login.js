import React from 'react';
import Card from './card.js';
import { UserContext } from './App.js';

let startingBalance = 0.00;


export default function Login(){
    const [loggedIn, setLoggedIn]           = React.useState(0);
    const [userName, setUserName]           = React.useState('');
    const [userPassword, setUserPassword]   = React.useState('');
    const [loggedinUser, setLoggedInUser]   = React.useState(null);
    const [user, setUser]                   = React.useState();
    const [users, setUsers]                 = React.useContext(UserContext);
    
    const ctx                               = React.useContext(UserContext);
    var ctxusers = [];

    function handleClick(){
        
        //console.log('Login.js - ctxusers - ', ctxusers);
        const activeLogin = ctx[0].findIndex(x => x.loggedIn === 1)
        
        if (activeLogin === -1){
            //console.log('Login.js - no active login');
            //console.log('Login.js - ',userName,userPassword);
            findUser(userName, userPassword);
        }
        else {
            if (window.confirm("There is already a logged in user session. Do you wish to log in as a different user?")) {
                alert("The logged in user has changed.");
                logOut();
              } else {
                    return;
              } 
        }
        
 
    }

    function logOut(){

        console.log('Login.js - logOut fired');
        let updatedValue = [...ctx[0]];
        updatedValue.forEach(element => element.loggedIn = 0);
        setUsers(updatedValue);

    }

    function handleUpdate(i){
        
        let updatedValue = [...ctx[0]];
        updatedValue[i].loggedIn = 1;
        console.log('Login.js - After logged in is updated: ', updatedValue);
        console.log('Login.js - handle update values are now: ', updatedValue);
        setUsers(updatedValue);
        setLoggedIn(1);
        console.log('users: ', users);
        
    }

    function findUser(userName){
        console.log('Login.js - find user fired');
        console.log("Login.js - find user called, looking for email: ", userName);
        
        setUsers(ctx[0]);
        console.log("Login.js - setUser just called, ctx values: ", ctx[0]);
        
        const foundidx = ctx[0].findIndex(x => x.email === userName);
        const foundkey = ctx[0][foundidx].key;
        
        console.log('Index is: ', foundidx);
        console.log('Key is: ',foundkey);
        const found = ctx[0][foundidx];
        console.log("Login.js - result is:", found);
        
        let userFirstName = null;
        
        if (!found)
        {
            console.log('Login.js - No user found');
            alert('No user found which matches the email entered. Please try again.');
            return;
        }
        else {
            
            console.log('Login.js - User match found, stored login password is: ', found.password);
            validatePassword(found.password, userPassword, foundidx);
            userFirstName = found.name;
            setUser(userFirstName);
            console.log('Login.js - Just prior to handleUpdate: ', ctx[0]);
            handleUpdate(foundidx);
            console.log('Login.js - handleUpdate called', ctx[0]);
            console.log('Login.js - ', userFirstName, " has logged in.")
            startingBalance = parseFloat(found.balance).toFixed(2);
            //found.balance = startingBalance;
            console.log('Login.js - Starting Balance is: ', startingBalance);
            console.log('Login.js - balance is: ', found.balance);
            ctx[foundidx].balance = startingBalance;
            console.log('Login.js - balance after SetBalance is: ', ctx[0][foundidx].balance);
            
        }
        
        
        
    }

    function validatePassword(password, userPassword, foundidx){

        console.log('Login.js - Entered password: ', userPassword, ' Stored password for user: ', password);
        console.log('Login.js - validatePassword fired: ', ctx[0]);

        if (password === userPassword)
        {
            console.log('Login.js - MATCH: attempted login password of: ', userPassword, " matches stored password of: ", password);
            setLoggedInUser(foundidx);
            console.log('User with index id of: ', foundidx, " has been logged in.");
            console.log('Login.js - ctx content: ', ctx[0]);
        }
        else {
            console.log('Login.js - MISMATCH: attempted login password of: ', userPassword, " does NOT match stored password of: ", password);
            alert('You have entered an incorrect password. Repeated failed attempts will result in an account lockout.');
            return
        }
        
        
    }

    return (
        <div>
        <Card
            bgcolor="warning"
            header={!loggedIn ? (
                "Login"
            ):(
                "Welcome Back " + user + "!"
            )}
            txtcolor="black"
            body={!loggedIn ? (
                <>
                Email<br/>
                <input type= "input" className="form-control" id="email" placeholder="Enter email" value={userName} onChange={e => setUserName(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type= "password" className ="form-control" id="password" placeholder="Enter password" value={userPassword} onChange={e => setUserPassword(e.currentTarget.value)} /><br/>
                 <button type="submit" className="btn btn-light" onClick={handleClick}>Login</button>
                </>
                 ):(
                    <>
                    <h6><b>Current balance:</b> ${startingBalance}</h6>
                    <h6>What would you like to do?</h6>
                    <a className="link-primary" href="#/deposit/">Make Deposit</a>
                    <br/>
                    <a className="link-primary" href="#/withdraw/">Make Withdrawal</a>
                    </>
                )}

                
        />
        </div>
    )
}

