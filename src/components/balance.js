import React,{useContext,useState} from "react";
import {GlobalContext} from '../Context/globalstate'
import transaction from "./transaction";
function Balance() {

  const {transactions} = useContext(GlobalContext);
  const [transactionamount,setTransactionAmount] = useState(transactions);
  const amount = transactions.map(transaction => transactions.transactionAmount)
  const total = amount.reduce((acc,item)=>(acc+= item),0);

  return (
    <div className="money">
      CURRENT BALANCE
      
      <h4> ${total}</h4>
    </div>
  );
}

export default Balance;
