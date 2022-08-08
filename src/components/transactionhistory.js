import React, {useContext} from "react";
import {GlobalContext} from '../Context/globalstate'
import {Transaction} from "./transaction";

export const Transactionhistory = () => {

  const {transactions} = useContext(GlobalContext);
  
  return (
    <div>
      <h3> Transaction history </h3>
      <ul className="list">
        {transactions.map(transaction=>(
          <Transaction key={transaction.id} transactions={transaction}/>
        ))}

      </ul>
      
      
    </div>
  );
}

export default Transactionhistory;

