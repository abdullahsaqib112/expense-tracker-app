import React, {useContext} from "react";
import {GlobalContext} from '../Context/globalstate'

function Transactionhistory() {

  let transaction = useContext(GlobalContext);
  console.log(transaction);
  return (
    <div>
      <h3> Transaction history </h3>
     
      <ul className="list">
            <li className="plus">
                Project 1 Income 2
                <span>$1000</span>
                <button className="delete-btn"> X </button>
            </li>

            

            <li className="minus">
                Recharge
                <span> $500</span>
                <button className="delete-btn"> X </button>
                
            </li>

           
      </ul>
    </div>
  );
}

export default Transactionhistory;

