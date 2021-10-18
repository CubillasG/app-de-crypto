import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Tablacoint from './componentes/tablacoint';

function App() {
  
  const [coins, setCoins] = useState([]);

  const [search, setsearch] = useState('')
  
  
  const getData = async ()=>{
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    setCoins(res.data)
  }

  useEffect(() => {
   getData()
  }, [])
  
  return (
    <>
    <div className='container'>
      <h1>Crypto Futuro</h1>
      </div>
    
    <div className="container">
      <div className='row'>
        <input type='text' placeholder='inserte el tipo de cripto' className='form-control bg-dark text-light border-0 mt-4 text-center' 
        onChange={e =>setsearch(e.target.value)}/>
      < Tablacoint coins={coins} search={search} />
      </div>
    </div>
    </>
  );
}

export default App;
