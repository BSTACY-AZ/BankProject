import React from 'react';
import Card from './card.js';
import { UserContext } from './App.js';
import DynamicTable from "./DynamicTable";;






function Deposit(){
    
    const [deposit, setDeposit]             = React.useState('');
    const [balance, setBalance]             = React.useState('');
    const ctx                               = React.useContext(UserContext);
    const [users, setUsers]                 = React.useContext(UserContext);
    const foundidx                          = ctx[0].findIndex(x => x.loggedIn === 1);
    const startingBalance                   = parseFloat(ctx[0][foundidx].balance).toFixed(2);
    const [depositCount, setDepositCount]   = React.useState(0);
    var ctxusers = [];
    

    console.log('Deposit.js - Deposit Loading');
    console.log('Deposit.js - Logged In User Index: ', foundidx); 
    console.log('Deposit.js - Starting Balance: $ ', startingBalance); 
    
    
    
    const onInput = (e) => setDeposit(e.target.value);
    
    

    const onSubmit = (amount) => {
        
        let newBalance = 0; 
        console.log('Deposit.js - On Submit Fired with an amount of $', amount);
        ctxusers = ctx[0];
        //console.log('CTX Users: ', ctxusers[foundidx].balance);
        console.log('CTX Users: ', ctxusers);
        
        if (depositCount === 0){
            console.log('# of deposits is: ', depositCount);
            newBalance = parseFloat(startingBalance) + parseFloat(deposit);
            newBalance = parseFloat(newBalance).toFixed(2);
            console.log('Deposit.js - First Deposit - New Balance to be: ', newBalance);
            setBalance(newBalance);
            ctxusers[foundidx].balance = newBalance;
            setUsers(ctxusers);
        }
        else {
            console.log('# of deposits is: ', depositCount);
            newBalance = parseFloat(balance) + parseFloat(deposit);
            newBalance = parseFloat(newBalance).toFixed(2);
            console.log('Deposit.js - Subsequent Deposit - New Balance to be: ', newBalance);
            setBalance(newBalance);
            ctxusers[foundidx].balance = newBalance;
            setUsers(ctxusers);
        }
        
        console.log('# of deposits is: ', depositCount);
        setDeposit('');
        setDepositCount(depositCount + 1);
        
    }
    




    return(
        <div>
        <Card
        bgcolor="success"
        header="Deposit"
        txtcolor="white"
        body={ depositCount > 0 ? (
                <>
                <h6><b>Your deposit was successful. <br/> <br/> New balance: ${balance}</b> </h6>
                <h6>How much would you like to deposit?</h6>
                <input type="input" className="form-control" value={deposit} id="depositamt" placeholder = "Deposit Amount" onInput={onInput} /><br/>
                <button type="submit" className="btn btn-light" id="btndeposit" onClick={() => {onSubmit({deposit})}}>Deposit</button>
                </>
            ):(
                <>
                <h6><b>Balance:  ${startingBalance}</b> </h6>
                <h6>How much would you like to deposit?</h6>
                <input type="input" className="form-control" value={deposit} id="depositamt" placeholder = "Deposit Amount" onInput={onInput} /><br/>
                <button type="submit" className="btn btn-light" id="btndeposit" onClick={() => {onSubmit({deposit})}}>Deposit</button>
                </>
                )}
    />
    </div>
            
            
    )
}

export default Deposit;