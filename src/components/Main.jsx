
import refesh from '../assets/images/refresh.png'
import { useState } from 'react';

function Main(){
    
    const [counter, setCounter] = useState(0)

    function plus(){
        setCounter(counter+3)
    }
    function minus(){
        setCounter(Math.max(counter-2, 0))  
    }
    function refeshN(){
        setCounter(0)
    }
    return(
            <div className="main">
                <div className="main-number">
                    {counter}
                </div>
                <div className="main-buttons">
                    <button className='btn-plus' onClick={plus}>
                        +
                    </button>
                    <button className='btn-refesh'onClick={refeshN}>
                        <img src={refesh}/>
                    </button>
                    <button className='btn-minus' onClick={minus}>
                        -
                    </button>
                </div>
            </div>
    );
}

export default Main;