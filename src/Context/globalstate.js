import React,{createContext, useReducer} from "react";

// create intial state

import appreducer from "./appreducer";

const initialState={
    transactions:[
        {id:1, description:"Income1", transactionAmount: 1000},
        {id:2, description:"Expense1", transactionAmount: -5000},
        {id:3, description:"Income2", transactionAmount: 2000}
    ]
}


// creating Global Context

export const GlobalContext = createContext(initialState);

// Creating Provider for global Context

export const GlobalProvider = ({children})=>{

    
    const [state,dispatch] = useReducer(appreducer,initialState)
    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
            
        }>
            {children}
        </GlobalContext.Provider>
    );
}