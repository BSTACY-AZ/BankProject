import React from 'react';
import { UserContext } from './App.js';



  function myFunction(item, index, arr){
    arr[index]['key'] = index;
  }
function DynamicTable(){
// get table column
 
 const ctx = React.useContext(UserContext);
 const userData = ctx[0];
userData.forEach(myFunction);

 const column = Object.keys(userData[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }
// get table row data
const tdData =() =>{
   
     return userData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}
  return (
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>

)
}
export default DynamicTable;