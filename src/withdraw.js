import React from 'react';
import Card from './card.js';
import { UserContext } from './App.js';





function Withdraw(){
    
    const [withdrawal, setWithdrawal]               = React.useState('');
    const [balance, setBalance]                     = React.useState('');
    const ctx                                       = React.useContext(UserContext);
    const [users, setUsers]                         = React.useContext(UserContext);
    const foundidx                                  = ctx[0].findIndex(x => x.loggedIn === 1);
    const startingBalance                           = ctx[0][foundidx].balance;
    const [withdrawalCount, setWithdrawalCount]     = React.useState(0);
    var ctxusers = [];
    

    console.log('Withdraw.js - Withdraw Loading');
    console.log('Withdraw.js - Logged In User Index: ', foundidx); 
    
    const onInput = (e) => setWithdrawal(e.target.value);
    
    const onSubmit = (amount) => {
        let newBalance = 0; 
        console.log('Withdraw.js - On Submit Fired with an amount of $', amount);
        ctxusers = ctx[0];
        console.log('CTX Users: ', ctxusers);

        
        if (withdrawalCount === 0){
            console.log('# of withdrawals is: ', withdrawalCount);
                if (withdrawal > startingBalance) {
                    console.log(withdrawal);
                    console.log(startingBalance);
                    alert("You cannot withdraw more than your total available balance. Please try again.");
                    return
                }
                else {
                    newBalance = parseFloat(startingBalance) - parseFloat(withdrawal);
                    newBalance = parseFloat(newBalance).toFixed(2);
                    console.log('Withdraw.js - First Withdrawal - New Balance to be: ', newBalance);
                    setBalance(newBalance);
                    ctxusers[foundidx].balance = newBalance;
                    setUsers(ctxusers);
                }
        }
        else if (withdrawalCount > 0) {
            if (withdrawal > balance) {
                console.log(withdrawal);
                console.log(balance);
                alert("You cannot withdraw more than your total available balance. Please try again.");
                return
            }
            else {
                console.log('# of withdrawals is: ', withdrawalCount);
                newBalance = parseFloat(balance) - parseFloat(withdrawal);
                newBalance = parseFloat(newBalance).toFixed(2);
                console.log('Withdraw.js - Subsequent Withdrawal - New Balance to be: ', newBalance);
                setBalance(newBalance);
                ctxusers[foundidx].balance = newBalance;
                setUsers(ctxusers);
            }   
        }
        
        console.log('# of withdrawals is: ', withdrawalCount);
        setWithdrawal('');
        setWithdrawalCount(withdrawalCount + 1);
    }
    

    return(
        
            <Card
                bgcolor="info"
                header="Withdrawal"
                txtcolor="white"
                body={ withdrawalCount > 0 ? (
                        <>
                        <h6><b>Balance: ${balance}</b> </h6>
                        <h6>How much would you like to withdraw?</h6>
                        <input type="input" className="form-control" value={withdrawal} id="withdrawamt" placeholder = "Withdrawal Amount" onInput={onInput} /><br/>
                        <button type="submit" className="btn btn-light" id="btnwithdraw" onClick={() => {onSubmit({withdrawal})}}>Withdraw</button>
                        </>
                    ):(
                        <>
                        <h6><b>Balance: ${startingBalance}</b> </h6>
                        <h6>How much would you like to withdraw?</h6>
                        <input type="input" className="form-control" value={withdrawal} id="withdrawamt" placeholder = "Withdrawal Amount" onInput={onInput} /><br/>
                        <button type="submit" className="btn btn-light" id="btnwithdraw" onClick={() => {onSubmit({withdrawal})}}>Withdraw</button>
                        </>
                        )}
            />
    )
}

export default Withdraw;