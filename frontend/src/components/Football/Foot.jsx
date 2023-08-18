import React from 'react'
import './Foot.css'

const Foot = () => {
  return (
    <div>
        <div className='game-container'>
        <div className='gameCont-head'><span>FOOTBALL</span></div>
        <div className='game2'>
            <h3>LIVE SCORE</h3>
            <div className='game-stat'>
                <div className='team-name'><span>INDIA</span><p>3 - 2</p><span>PAKIS</span></div>
                <div className='time'><span>88:20</span></div>
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
    </div>
  )
}

export default Foot
