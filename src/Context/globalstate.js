import React,{createContext, useReducer} from "react";

// create intial state

import AppReducer from "./AppReducer";

let initialState={
    transactions:[
    {ids:1, description:"Income1", transactionAmount: 1000},
    {ids:2, description:"Expense1", transactionAmount: -5000},
    {ids:3, description:"Income2", transactionAmount: 2000}
]
};


// creating Global Context

export const GlobalContext = createContext(initialState);

// Creating Provider for global Context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    

    // Actoions

    function Deletetransaction(id) {
        dispatch({
            type:'delete_Transaction',
            pyload: id
        });
    }


    function Addtransaction(transaction) {
        dispatch({
            type:'Add_Transaction',
            pyload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        Deletetransaction,
        Addtransaction
      }}>
        {children}
      </GlobalContext.Provider>);
    }
   
    