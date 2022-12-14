
 function AppReducer (state, action) {
    switch(action.type) {
      case 'delete_Transaction':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'Add_Transaction':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }
  export default AppReducer;
  