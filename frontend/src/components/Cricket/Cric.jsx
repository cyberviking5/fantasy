import React , {useEffect , useState} from 'react'
import './Cric.css'
import { fetchFromAPI } from '../../fetchFromAPI';

const Cric = () => {

    const [t1,setT1] = useState('');
    const [t2,setT2] = useState('');
    const [r1,setR1] = useState('0');
    const [r2,setR2] = useState('0');
    const [o1,setO1] = useState('0');
    const [o2,setO2] = useState('0');
    const [w1,setW1] = useState('0');
    const [w2,setW2] = useState('0');
    const [matchId, setMatchId] = useState('');


    useEffect((time)=>{
        fetchFromAPI(`list-by-date?Category=cricket&Date=20230818`)
        .then((data)=>(
            console.log(data),
            setT1(data.Stages[0].Events[0].T1[0].Abr),
            setT2(data.Stages[0].Events[0].T2[0].Abr),
            setR1(data.Stages[0].Events[0].Tr1C1),
            setR2(data.Stages[0].Events[0].Tr2C1),
            setO1(data.Stages[0].Events[0].Tr1CO1),
            setO2(data.Stages[0].Events[0].Tr2CO1),
            setW1(data.Stages[0].Events[0].Tr1CW1),
            setW2(data.Stages[0].Events[0].Tr2CW1),
            setMatchId(data.Stages[0].Events[0].Eid)
            ))    
      },[1]);


  return (
    <div className='cricket'>
        <div className='cric-head'><span>CRICKET</span></div>
        <div className='cric2'>
            <h3>LIVE SCORE</h3>
            <div className='cric-stat'>
            <div className='cric-score'><span className='run'>{r1}</span><span className='over'>({o1})</span><span className='c-name'>{t1}</span></div>
            <div className='cric-vs'><span>VS</span></div>
            <div className='cric-score'><span className='run'>{r2}</span><span className='over'>({o2})</span><span className='c-name'>{t2}</span></div>
            </div>
        </div>
        <div className='g3'>
        <div className='g-butt'><p>Team1 will win ?</p><button>Yes</button><button>No</button></div>
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
