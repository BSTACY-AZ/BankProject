import React from 'react';
import UserContext from './App.js';
import DynamicTable from "./DynamicTable";


function AllData(){
    
    const ctx = React.useContext(UserContext);
    const userData = ctx;

    console.log('AllData.js - ', userData);
     
    
    return(
        <DynamicTable />
    );
}

export default AllData;