import React from "react";

export const Transaction=({transactions})=> {
  return (
    
            <li className="plus">

            {transactions.description}

                <span> {transactions.transactionAmount} </span>
                <button className="delete-btn"> X </button>
            </li>
        

  );
}

export default Transaction;
