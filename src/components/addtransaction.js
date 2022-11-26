import React, {useState,useContext} from "react";
import { GlobalContext } from "../Context/globalstate";

function Addtranscation() {

    const {transactions} = useContext(GlobalContext);
    const [Description,setDescription] = useState(transactions);
    const [transactionamount,setTransactionAmount] = useState(transactions);
    const {Addtransaction} = useContext(GlobalContext);

    const onSubmit = e => {
            e.preventDefault();
            const newTransction = {
                id: Math.floor(Math.random()*1000000),
                Description: setDescription,
                transactionmount: setTransactionAmount
            }

            Addtransaction(newTransction);
    }
  return (
    <div>
        <h3> Add New Transaction </h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            
          <label htmlFor="amount">
                 <h4>Description</h4>
            
            </label>
                <input type="text" placeholder="Add Details"
                 value={transactions.Description}
                 onChange={(event)=>setDescription(event.target.value)}>
                        
                </input>
            </div>

            <div>
                <label>
                   <h4>Transaction Amount</h4> 
                </label>

                <input type="number" placeholder="Enter Amount"
                value={transactions.transactionamount}
                onChange={(event)=>setTransactionAmount(event.target.value)}>
                </input>
            </div>

            <button className="btn">
                Add Transaction
            </button>
        </form>
    </div>
  );
}

export default Addtranscation;
