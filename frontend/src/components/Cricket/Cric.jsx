import React from 'react'
import './Cric.css'

const Cric = () => {
  return (
    <div className='cricket'>
        <div className='cric-head'><span>CRICKET</span></div>
        <div className='cric2'>
            <h3>LIVE SCORE</h3>
            <div className='cric-stat'>
            <div className='cric-score'><span className='run'>169</span><span className='over'>(20)</span><span className='c-name'>INDIA</span></div>
            <div className='cric-vs'><span>VS</span></div>
            <div className='cric-score'><span className='run'>100</span><span className='over'>(20)</span><span className='c-name'>PAKIS</span></div>
            </div>
        </div>
        <div className='g3'>
            <div className='g-butt'><button>Enter</button></div>
            <div className='g-sub'><button>Submit</button> <input type="number" placeholder='Enter the amount' /></div>
        </div>
        <div className='g4'>
            <div className='g-rules'><h2>RULES</h2>
            <ul>
                <li>WIN : 2x the you bet</li>
                <li>LOSE : No return</li>
                <li>MINIMUM AMOUNT to bet : <span>100 ETH</span></li>
            </ul>
            </div>
            <div className='g-loan'>
                <h2>Need Loan ?</h2>
                <p>Now get the Flash Loan instantly!!!</p>
                <div>
                <input type="number" placeholder='Enter the amount'/>
                <button>Get Loan</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cric
