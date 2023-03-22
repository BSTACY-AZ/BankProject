import 'bootstrap/dist/css/bootstrap.min.css';
import FNBRB from './FNBRB.png';
import Card from './card.js';
import React from 'react';
//import UserContext from './index.js';




function Home(){
    //const ctx = React.useContext(UserContext);
    //console.log('Home.js - ',ctx);
    return(
        <div>
        <Card
            bgcolor="light"
            txtcolor="black"
            header="First National Bank of Roast Beef"
            title="Welcome"
            text="Create an account or log in to access the bank"
            body={(<img src={FNBRB} className="img-fluid" alt="FNRB Logo"/>)}
        />
        </div>
    );
}


export default Home;