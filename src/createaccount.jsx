import React from 'react';
import Card from './card.js';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './App.js';





export default function CreateAccount(){
    const [show, setShow]    = React.useState(true);
    const [status, setStatus]    = React.useState('');
    const [name, setName]    = React.useState('');
    const [balance, setBalance]    = React.useState('');
    const [email, setEmail]    = React.useState('');
    const [password, setPassword]    = React.useState('');
    const [loggedIn, setLoggedIn]    = React.useState(0);
    const ctx   = React.useContext(UserContext);
    const [users, setUsers]   = React.useContext(UserContext);
    const ctxusers = [];
    const navigate = useNavigate();
    


    function handleClick(){
        navigate("#/login/");
    }

function validate(field, label){
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
    return true;
}

function handleCreate(){
    console.log('CreateAccount.js - ', name, email,password, balance, loggedIn);
    if (!validate(name,     'name'))        return;
    if (!validate(email,    'email'))       return;
    if (!validate(password, 'password'))    return;
    if (!validate(balance, 'balance'))    return;
    ctxusers.push({users: [{name:name, email: email, password: password, balance: balance, loggedIn: 0}]});
    
    setShow(false);
    

    let updatedValue = ctxusers;
    console.log(updatedValue);
    //setUsers([users].concat(updatedValue));
    //setUsers(users => users.concat(updatedValue));
    //setUsers(users => [...users, updatedValue]);
    console.log('CTX before set is: ', ctx);
    console.log('CTX Users before set is: ', ctxusers);
    setUsers(users => [...ctx, ...ctxusers]);

    console.log('CTX post-set is: ', ctx);
}


    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setBalance(0.00);
        setShow(true);
    }

    return (
    <div style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
    <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder = "Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email address<br/>
            <input type= "input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
            Password<br/>
            <input type= "password" className ="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
            Starting Balance<br/>
            <input type="input" className="form-control" id="startingbalance" placeholder = "Enter starting balance" value={balance} onChange={e => setBalance(e.currentTarget.value)} /><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
             
            </>
            ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                <div className="divider"/>
                <a href="#/login/"><button type="submit" className="btn btn-light" onClick={handleClick}>Login</button></a>
                </>
            )}
            
    />
    </div>

    
)

}

