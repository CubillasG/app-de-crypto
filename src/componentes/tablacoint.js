import React from 'react';
import Filacoins from './Filacoins';

const titulos = ['#', 'moneda', 'precio', 'cambio de precio', '24hs valor'];


function Tablacoint({coins, search}) {

    const filtroDeMonedas = coins.filter((coin)=> 
            coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase()))
    return (
        <table className='table table-dark table-hover mt-5'>
            <thead>
                <tr>
                    {
                        titulos.map(titulo =>(
                            <td>{titulo}</td>
                        ))
                    }
                
                </tr>
            </thead>
            <tbody>
                {filtroDeMonedas.map((coin, index) =>(
                   <Filacoins coin={coin} key={index} index={index + 1}/>
                ))}
            </tbody>
        </table>
    )
}

export default Tablacoint
