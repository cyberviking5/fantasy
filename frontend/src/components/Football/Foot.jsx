import React , {useEffect, useState} from 'react'
import './Foot.css'
import { fetchFromAPI } from '../../fetchFromAPI';
import Modal from './Modal';

const Foot = () => {

    const [t1,setT1] = useState('');
    const [t2,setT2] = useState('');
    const [g1,setG1] = useState('');
    const [g2,setG2] = useState('');
    const [time,setTime] = useState('');
    const [matchId, setMatchId] = useState('');
    const [live,setLive] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    
    // const [he,setHe] = useState('');

    // const interval = setInterval(()=>{
    //     setHe(new Date());
    // },10000);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchFromAPI('list-live?Category=soccer&Timezone=-7');
                
                if (response.Stages && response.Stages.length > 0 && response.Stages[0].Events && response.Stages[0].Events.length > 0) {
                    setT1(response.Stages[0].Events[0].T1[0].Abr);
                    setT2(response.Stages[0].Events[0].T2[0].Abr);
                    setG1(response.Stages[0].Events[0].Tr1);
                    setG2(response.Stages[0].Events[0].Tr2);
                    setTime(response.Stages[0].Events[0].Eps);
                    setMatchId(response.Stages[0].Events[0].Eid);
                } else {
                    setLive(false);
                }
            } catch (error) {
                if (error.response && error.response.status === 429) {

                    // Too Many Requests: Implement a backoff strategy
                    // setTimeout(fetchData, 5000); // Retry after 5 seconds
                } else {
                    // Handle other errors
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, []);



  return (
    <div>
        <div className='game-container'>
         <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        <div className='gameCont-head'><span>FOOTBALL</span></div>
        <div className='game2'>
            <h3>{live?`LIVE SCORE`:`No live matches happening right now`}</h3>
            <div className='game-stat'>
                <div className='team-name'><div>{t1}</div><span className='f-score'>{g1} - {g2}</span><div>{t2}</div></div>
                <div className='time'><span>{time}</span></div>
            </div>
        </div>
        <div className='g3'>
            <div className='g-butt'><p>Team1 will win ?</p><button>Yes</button><button>No</button></div>
            <div className='g-sub'><button className='sub'>Submit</button> <input type="number" placeholder='Enter the amount' /> <button className='rewardF' onClick={() => setIsOpen(true)}>Rewards</button></div>
            
        </div>
        <div className='g4'>
            <div className='g-rules'><h2>RULES</h2>
            <ul>
                <li>WIN : More than you bet</li>
                <li>LOSE : No return</li>

                <li>MINIMUM AMOUNT to bet : <span>0.01 ETH</span></li>
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
