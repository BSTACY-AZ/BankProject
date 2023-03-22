import React from 'react';
import Card from './card.js';
//import UserContext from './index.js';





function Deposit(){
    
    const [deposit, setDeposit]             = React.useState('');
    const [balance, setBalance]             = React.useState('');
    //const ctx                               = React.useContext(UserContext);
    //const foundidx                          = ctx.users.findIndex(x => x.loggedIn === 1);
    //const startingBalance                   = ctx.users[foundidx].balance;
    let deposits                            = 0;
    
    

    console.log('Deposit.js - Deposit Loading');
    //console.log('Deposit.js - Logged In User Index: ', foundidx); 
    
    
    
    const onInput = (e) => setDeposit(e.target.value);
    
    

    const onSubmit = (amount) => {
        console.log('Deposit.js - On Submit Fired with an amount of $', amount);
        //console.log('Deposit.js - ', ctx.users[foundidx].balance);
        //let newBalance = parseFloat(ctx.users[foundidx].balance) + parseFloat(deposit);
        //console.log('Deposit.js - New Balance to be: ', newBalance);
        //ctx.users[foundidx].balance = parseFloat(newBalance).toFixed(2);
        //console.log('Deposit.js - CTX Balance is now: ', ctx.users[foundidx].balance);
        //setBalance(newBalance);
        deposits = deposits + 1;
        setDeposit('');
        
        
    }
    




    return(
        
            <Card
                bgcolor="success"
                header="Deposit"
                txtcolor="white"
                body={ deposits > 0 ? (
                        <>
                        <h6><b>Balance: ${balance}</b> </h6>
                        <h6>How much would you like to deposit?</h6>
                        <input type="input" className="form-control" value={deposit} id="depositamt" placeholder = "Deposit Amount" onInput={onInput} /><br/>
                        <button type="submit" className="btn btn-light" id="btndeposit" onClick={() => {onSubmit({deposit})}}>Deposit</button>
                        </>
                    ):(
                        <>
                        <h6><b>Balance: replace with bracket starting balance bracket</b> </h6>
                        <h6>How much would you like to deposit?</h6>
                        <input type="input" className="form-control" value={deposit} id="depositamt" placeholder = "Deposit Amount" onInput={onInput} /><br/>
                        <button type="submit" className="btn btn-light" id="btndeposit" onClick={() => {onSubmit({deposit})}}>Deposit</button>
                        </>
                        )}
            />
    )
}

export default Deposit;