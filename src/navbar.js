import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { OverlayTrigger, Tooltip} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import UserContext from './index.js';



export default function NavBar(){
    //const ctx = React.useContext(UserContext);
    //console.log('Navbar.js - Nav bar loading, user values are: ', ctx);
    /*
    const activeLogin = ctx.users.findIndex(x => x.loggedIn === 1);

    if (activeLogin >=0){
        console.log('Navbar.js - there is a logged in user');
    }
    else {
        console.log('Navbar.js - there is NOT a logged in user');
    }
    */
    return (
        
    
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <OverlayTrigger placement={'right'} overlay={<Tooltip>Show the Home Page</Tooltip>}>
                <Navbar.Brand href="/#">FNBRB</Navbar.Brand>
                </OverlayTrigger>
                <Navbar.Toggle aria-controls="respsonive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <OverlayTrigger placement={'right'} overlay={<Tooltip>Create a new account</Tooltip>}>
                            <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
                        </OverlayTrigger>
                        
                        <OverlayTrigger placement={'right'} overlay={<Tooltip>Log into an account</Tooltip>}>
                            <Nav.Link href="#/login/">Log In</Nav.Link>
                        </OverlayTrigger>
                        
                        <OverlayTrigger placement={'right'} overlay={<Tooltip>Deposit funds</Tooltip>}>
                            <Nav.Link href="#/deposit/">Deposit</Nav.Link>
                        </OverlayTrigger>                            
                        <OverlayTrigger placement={'right'} overlay={<Tooltip>Withdraw funds</Tooltip>}>
                            <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement={'right'} overlay={<Tooltip>Show all user accounts</Tooltip>}>
                            <Nav.Link href="#/alldata/">All Data</Nav.Link>
                        </OverlayTrigger>
                        </Nav>
                    </Navbar.Collapse>
        </Navbar>
    
    );
}

