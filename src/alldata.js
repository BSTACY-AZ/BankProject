import React from 'react';
//import UserContext from './index.js';
import DynamicTable from "./DynamicTable";


function AllData(){
    
    //const ctx = React.useContext(UserContext);
    //const userData = ctx.users;

    console.log('AllData.js - '/*, userData*/);
     
    
    return(
        <DynamicTable />
    );
}

export default AllData;