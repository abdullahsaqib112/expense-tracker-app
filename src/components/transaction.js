import React, {useContext} from 'react';
import { GlobalContext } from '../Context/globalstate';

//Money formatter function


export const Transaction = ({ transaction }) => {
  const { Deletetransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{transaction.amount}</span><button onClick={() => Deletetransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}