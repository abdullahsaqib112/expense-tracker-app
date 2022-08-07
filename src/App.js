import logo from './logo.svg';
import './App.css';

import { GlobalProvider } from './Context/globalstate';
import Header from './components/header';
import Balance from './components/balance';
import Summary from './components/accountsummary';
import Transactionhistory from './components/transactionhistory';
import Addtranscation from './components/addtransaction';

function App() {
  return (
    // parent container

    
      <GlobalProvider>

      
      <div className='container'>
      <Header> </Header>
      <Balance> </Balance>
      <Summary></Summary>
      <Transactionhistory></Transactionhistory>
      <Addtranscation></Addtranscation>
      </div>
      
    
      </GlobalProvider>

    
  );
}

export default App;
