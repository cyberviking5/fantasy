import React,{useEffect , useState} from 'react'
import './Hock.css'
import { fetchFromAPI } from '../../fetchFromAPI';

const Hock = () => {


    const [t1,setT1] = useState('');
    const [t2,setT2] = useState('');
    const [g1,setG1] = useState('');
    const [g2,setG2] = useState('');
    const [time,setTime] = useState('');
    const [matchId, setMatchId] = useState('');
    const [live,setLive] = useState(true);
    // const [he,setHe] = useState('');

    // const interval = setInterval(()=>{
    //     setHe(new Date());
    // },10000);

    // useEffect((time)=>{
    //     fetchFromAPI(`list-by-date?Category=hockey&Date=20230818`)
    //     .then((data)=>(
    //         console.log(data),
    //         setT1(data.Stages[0].Events[0].T1[0].Abr),
    //         setT2(data.Stages[0].Events[0].T2[0].Abr),
    //         setG1(data.Stages[0].Events[0].Tr1),
    //         setG2(data.Stages[0].Events[0].Tr2),
    //         setTime(data.Stages[0].Events[0].Eps),
    //         setMatchId(data.Stages[0].Events[0].Eid)
    //         ))    
    //   },[1]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchFromAPI('list-live?Category=hockey');
                
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
      <div className='gameH-container'>
        <div className='gameCont-head'><span>HOCKEY</span></div>
        <div className='game2'>
        <h3>{live?`LIVE SCORE`:`No live matches happening right now`}</h3>
            <div className='game-stat'>
            <div className='teamH-name'><div>{t1}</div><span className='h-score'>{g1} - {g2}</span><div>{t2}</div></div>
                <div className='time'><span>{time}</span></div>
            </div>
        </div>
        <div className='g3'>
        <div className='g-butt'><p>Team1 will win ?</p><button>Yes</button><button>No</button></div>
            <div className='g-sub'><button>Submit</button> <input type="number" placeholder='Enter the amount' /></div>
        </div>
        <div className='g4'>
            <div className='g-rules'><h2>RULES</h2>
            <ul>
                <li>WIN : More than you bet</li>
                <li>LOSE : No return</li>
                <li>MINIMUM AMOUNT to bet : <span>1 ETH</span></li>
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

export default Hock
