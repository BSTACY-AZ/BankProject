import React from 'react';
import Card from './card.js';
//import UserContext from './index.js';





function Withdraw(){
    
    const [withdrawal, setWithdrawal]       = React.useState('');
    const [balance, setBalance]             = React.useState('');
    //const ctx                               = React.useContext(UserContext);
    //const foundidx                          = ctx.users.findIndex(x => x.loggedIn === 1);
    //const startingBalance                   = ctx.users[foundidx].balance;
    let withdrawals                         = 0;
    
    

    console.log('Withdraw.js - Withdraw Loading');
    //console.log('Withdraw.js - Logged In User Index: ', foundidx); 
    
    const onInput = (e) => setWithdrawal(e.target.value);
    
    const onSubmit = (amount) => {
        console.log('Withdraw.js - On Submit Fired with an amount of $', amount);
        //console.log('Withdraw.js - ',ctx.users[foundidx].balance);
        //let newBalance = parseFloat(ctx.users[foundidx].balance) - parseFloat(withdrawal);
        //console.log('Withdraw.js - New Balance to be: ', newBalance);
        //ctx.users[foundidx].balance = parseFloat(newBalance).toFixed(2);
        //console.log('Withdraw.js - CTX Balance is now: ', ctx.users[foundidx].balance);
        //setBalance(newBalance);
        withdrawals = withdrawals + 1;
        setWithdrawal('');
    }
    

    return(
        
            <Card
                bgcolor="info"
                header="Withdrawal"
                txtcolor="white"
                body={ withdrawals > 0 ? (
                        <>
                        <h6><b>Balance: ${balance}</b> </h6>
                        <h6>How much would you like to withdraw?</h6>
                        <input type="input" className="form-control" value={withdrawal} id="withdrawamt" placeholder = "Withdrawal Amount" onInput={onInput} /><br/>
                        <button type="submit" className="btn btn-light" id="btnwithdraw" onClick={() => {onSubmit({withdrawal})}}>Withdraw</button>
                        </>
                    ):(
                        <>
                        <h6><b>Balance: $ replace with bracket starting balance bracket</b> </h6>
                        <h6>How much would you like to withdraw?</h6>
                        <input type="input" className="form-control" value={withdrawal} id="withdrawamt" placeholder = "Withdrawal Amount" onInput={onInput} /><br/>
                        <button type="submit" className="btn btn-light" id="btnwithdraw" onClick={() => {onSubmit({withdrawal})}}>Withdraw</button>
                        </>
                        )}
            />
    )
}

export default Withdraw;