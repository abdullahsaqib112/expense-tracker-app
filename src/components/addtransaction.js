import React, {useState} from "react";
function Addtranscation() {

    const [Description,setDescription] = useState();
    const [transactionamount,setTransactionAmount] = useState();

  return (
    <div>
        <h3> Add New Transaction </h3>
        <form>
            <div>
                <label>
                    <h4>Description</h4>
                </label>
                <input type="text" placeholder="Add Details"
                 value={Description}
                 onChange={(event)=>setDescription(event.target.value)}>

                </input>
            </div>

            <div>
                <label>
                   <h4>Transaction Amount</h4> 
                </label>

                <input type="number" placeholder="Enter Amount"
                value={transactionamount}
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
