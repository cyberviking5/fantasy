import React , {useEffect , useState} from 'react'
import './Cric.css'
import { fetchFromAPI } from '../../fetchFromAPI';
import { address1, abi1 } from "../../contracts_abi_address/NFT"
import { address, abi } from "../../contracts_abi_address/SimpleFlashLoan"
import {address2,abi2} from '../../contracts_abi_address/Gamble'
import { ethers, providers } from "ethers";
import { toast } from 'react-toastify';
import Modal from './Modal';
import 'react-toastify/dist/ReactToastify.css';

const Cric = () => {
  const [num,setnum] = useState('');
  const [num1,setnum1] = useState('');
  const [flag,setflag]=useState('0');
  const [id,setid]=useState('0');
  const [sub,setsub]=useState(true);

  
  const [isOpen, setIsOpen] = useState(false)

    async function loan() {
        try {
          if (window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address, abi, signer);
            const transactionResponse = await contract.fn_RequestFlashLoan(
              "0xda9d4f9b69ac6C22e444eD9aF0CfC043b7a7f53f",
              num1
            );
            await listenForTransactionMined(transactionResponse, provider);
            toast.success("Loan processed")
            console.log("Done");
          }else{
            console.log("error")
            toast("please install metamask")
          }
        } catch (e) {
          toast.warning("Enter money in natural number");
          console.log(e);
        }
      }
      async function enter(){
        try{
          console.log(address1)
          if (window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address2, abi2, signer);
            // const transactionResponse1=await contract.setMatchStatusNotStarted()
            const transactionResponse = await contract.enter({value:ethers.utils.parseEther(num)})
            // await listenForTransactionMined(transactionResponse1, provider);
            await listenForTransactionMined(transactionResponse, provider);
            setsub(false)
            toast.success("Entered")
            console.log("Done");
          }else{
            toast.warning("please install metamask")
          }
        }catch(e){toast.warning("Please enter the amount");
          console.log(e)}
      }
    
      async function withdraw()
      {
        try{
          if (window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address2, abi2, signer);
            const transactionResponse1=await contract.settleTeamResultWon()
            await listenForTransactionMined(transactionResponse1, provider);
            setsub(true)
            toast.success("Money withdrawed")
            console.log("Done");
          }
          else{
            toast.warning("please install metamask")
          }
        }catch(e){toast.error("Cant withdraw now")
          console.log(e)}
      }
    
      async function NFT_Gen()
      {
        try{
        const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address1, abi1, signer);
            console.log(provider)
            console.log(signer)
            const transactionResponse = await contract.mintNFT("https://gateway.pinata.cloud/ipfs/QmfTfVhMGjyEj7jmr8awii3UnPK4BNekXq8trLkG1ZN9WY")
            await listenForTransactionMined(transactionResponse, provider);
            console.log(transactionResponse)
            const number=await contract.getTokenCounter()
            setid(parseInt(number._hex));
            setIsOpen(true)
            toast.success("Congratulations on your reward")
        }
        catch(e){console.log(e)}
      }
      
      function listenForTransactionMined(transactionResponse, provider) {
        try {
          console.log(`Mining ${transactionResponse.hash}...`);
          //listen for this transaction to be finished
          return new Promise((resolve, reject) => {
            provider.once(transactionResponse.hash, (transactionReciept) => {
              console.log(`Completed with ${transactionReciept.confirmations}`);
              resolve();
            });
          });
        } catch (e) {
          console.log(e);
        }
      }
    const [t1,setT1] = useState('');
    const [t2,setT2] = useState('');
    const [r1,setR1] = useState('0');
    const [r2,setR2] = useState('0');
    const [o1,setO1] = useState('0');
    const [o2,setO2] = useState('0');
    const [w1,setW1] = useState('0');
    const [w2,setW2] = useState('0');
    const [matchId, setMatchId] = useState('');
    const [live,setLive] = useState(true);


    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetchFromAPI('list-live?Category=cricket');
              
              if (response.Stages && response.Stages.length > 0 && response.Stages[0].Events && response.Stages[0].Events.length > 0) {
                setT1(response.Stages[0].Events[0].T1[0].Abr);
                setT2(response.Stages[0].Events[0].T2[0].Abr);
                setR1(response.Stages[0].Events[0].Tr1C1);
                setR2(response.Stages[0].Events[0].Tr2C1);
                setO1(response.Stages[0].Events[0].Tr1CO1);
                setO2(response.Stages[0].Events[0].Tr2CO1);
                setW1(response.Stages[0].Events[0].Tr1CW1);
                setW2(response.Stages[0].Events[0].Tr2CW1);
                setMatchId(response.Stages[0].Events[0].Eid)
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
    <div className="cricket">
      <Modal token_id={id} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      <div className="cric-head">
        <span>CRICKET</span>
      </div>
      <div className="cric2">
        <h3>{live ? `LIVE SCORE` : `No live matches happening right now`}</h3>
        <div className="cric-stat">
          <div className="cric-score">
            <span className="run">{r1} / {w1}</span>
            <span className="over">({o1})</span>
            <span className="c-name">{t1}</span>
          </div>
          <div className="cric-vs">
            <span>VS</span>
          </div>
          <div className="cric-score">
            <span className="run">{r2} / {w2}</span>
            <span className="over">({o2})</span>
            <span className="c-name">{t2}</span>
          </div>
        </div>
      </div>
      <div className="g3">
        <div className="g-butt">
          <p>Team1 will win ?</p>
          <button onClick={()=>{setflag('1');toast.success("Response recorded")}}>Yes</button>
          <button onClick={()=>{toast.success("Response recorded")}}>No</button>
        </div>
        <div className="g-sub">
        {sub?(<div><button className='sub' onClick={enter}>Submit</button> <input type="number" placeholder='Enter the amount' value={num} onChange={(e)=>{setnum(e.target.value)}}/></div>):(<div><button className='sub' onClick={withdraw}>Withdraw</button></div>)} <button className='rewardF' onClick={async() => {await NFT_Gen()}}>Rewards</button>
        </div>
      </div>
      <div className="g4">
        <div className="g-rules">
          <h2>RULES</h2>
          <ul>
            <li>WIN : More than you bet</li>
            <li>LOSE : No return</li>

            <li>
              MINIMUM AMOUNT to bet : <span>0.01 ETH</span>
            </li>
          </ul>
        </div>
        <div className="g-loan">
          <h2>Need Loan ?</h2>
          <p>Now get the Flash Loan instantly!!!</p>
          <div>
            <input type="number" placeholder="Enter the amount"  value={num1} onChange={(e)=>{setnum1(e.target.value)}}/>
            <button onClick={loan}>Get Loan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cric
