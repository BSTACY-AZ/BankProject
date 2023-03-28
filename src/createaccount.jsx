import React from 'react';
import Card from './card.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
    const [validated, setValidated] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const ctx   = React.useContext(UserContext);
    const [users, setUsers]   = React.useContext(UserContext);
    var ctxusers = [];
    
    
    
    const navigate = useNavigate();
    React.useEffect(() => console.log('User Context Updated!',(users), [users]));

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
        handleCreate();
      };


    function handleClick(){
        navigate("#/login/");
    }

    

    function validate(field, label){
        if (!field) {
            setStatus('One or more fields is missing information');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }
    

function handleCreate(){
    console.log('HandleCreate ctx: ', ctx);
    console.log('CTX 0 is: ', ctx[0]);
    console.log('CreateAccount.js - ', name, email,password, balance, loggedIn);
    if (!validate(name,     'name'))        return;
    if (!validate(email,    'email'))       return;
    if (!validate(password, 'password'))    return;
    if (!validate(balance, 'balance'))    return;

    
    
    const userCount = Object.keys(users).length;
    console.log(users);

    console.log('there are currently ', userCount, ' users');

    if (userCount === 1){

    console.log('single user record');
    ctxusers.push({name:name, email: email, password: password, balance: balance, loggedIn: 0});
    ctxusers.push(ctx[0].users);
    setShow(false);
    console.log('CTXU DS is: ', [...ctxusers]);
    setUsers(ctxusers); 
    
    }
    else{
   
        var addlUsers = users; 
        addlUsers.push({name:name, email: email, password: password, balance: balance, loggedIn: 0});
        setShow(false);
        console.log('ctx users - mult ', addlUsers);
        setUsers(addlUsers);
    }
}


    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setBalance(0.00);
        setShow(true);
    }

    function enableButton(){
        setDisable(false);

    }



    return (
    <Form noValidate validated={validated} onSubmit={handleCreate}>
    <Card
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (
            <>
            <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" className="form-control" placeholder = "Enter name" value={name}   onChange={e => setName(e.currentTarget.value)} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" className="form-control"  placeholder="Enter email" value={email}  onChange={e => setEmail(e.currentTarget.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" className ="form-control"  placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNumeric">
                <Form.Label>Starting Balance</Form.Label>
                <Form.Control required type="balance" className ="form-control" placeholder = "Enter starting balance" value={balance}  onChange={e => setBalance(e.currentTarget.value)} />
            </Form.Group>
            
            <Button type="submit" id="createaccount" className="btn btn-light" onClick={handleSubmit}  >Create Account</Button>
            
            
             
            </>
            ):(
                <>
                <h5>Success</h5>
                <button type="reset" className="btn btn-light" onClick={clearForm}>Add another account</button>
                <div className="divider"/>
                <a href="#/login/"><button type="button" className="btn btn-light" onClick={handleClick}>Login</button></a>
                </>
            )}
            
    />
    </Form>
    

    
)

}

