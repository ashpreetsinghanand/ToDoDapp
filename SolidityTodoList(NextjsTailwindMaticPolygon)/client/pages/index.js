import WrongNetworkMessage from '../components/WrongNetworkMessage'
import ConnectWalletButton from '../components/ConnectWalletButton'
import TodoList from '../components/TodoList'
import { TaskContractAddress } from '../config';
import TaskAbi from '../../backend/build/contracts/TaskContract.json';
import {ethers} from 'ethers';
import { useEffect, useState } from 'react';
/* 
const tasks = [
  { id: 0, taskText: 'clean', isDeleted: false }, 
  { id: 1, taskText: 'food', isDeleted: false }, 
  { id: 2, taskText: 'water', isDeleted: true }
]
*/

export default function Home() {

  const [correctNetwork,setCorrectNetwork] = useState(false);
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);
  const [currentAccount,setCurrentAccount] = useState('');
  const [input,setInput] = useState('');
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    connectWallet()
    getAllTasks()
  }, [])

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
   try{
     const {ethereum} =window
     if(!ethereum){
      console.log("Metamask not detected");
      return
     }
     let chainId = await ethereum.request({method:'eth_chainId'});
     console.log('connected to chain',chainId);

     const maticChainId ='0x13881';
     if(chainId !== maticChainId){
      alert('you are not connected to matic chain ')
      setCorrectNetwork(false);
     }
     else{
      setCorrectNetwork(true);
     }
     const accounts =await ethereum.request({method:'eth_requestAccounts'});

     console.log("Found account",accounts[0]);
     setIsUserLoggedIn(true);
     setCurrentAccount(accounts[0]);

   }catch(error){
        console.log(error);
   }
  }

  // Just gets all the tasks from the contract
  const getAllTasks = async () => {
      try{
        const {ethereum} = window;
        if(ethereum){
         const provider = new ethers.providers.Web3Provider(ethereum);
         const signer = provider.getSigner();
         const TaskContract = new ethers.Contract(
           TaskContractAddress,
           TaskAbi.abi,
           signer
         );

        let allTasks = await TaskContract.getMyTask();
        setTasks(allTasks)
         }else{
          console.log('ethereum object does not exist')
         }
      }catch(error){
        console.log(error);
      }
  }

  // Add tasks from front-end onto the blockchain
  const addTask= async (e)=>{
    e.preventDefault();

    let task = {
      'taskText': input,
      'isDeleted': false
    };

    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(response => {
          setTasks([...tasks, task]);
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new task");
        });
        ;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }

    setInput('')
  };
  
  const deleteTask = key => async() => {
    console.log(key);

    // Now we got the key, let's delete our tweet
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        let deleteTaskTx = await TaskContract.deleteTask(key, true);
        let allTasks = await TaskContract.getMyTask();
        setTasks(allTasks);
      } else {
        console.log("Ethereum object doesn't exist");
      }

    } catch(error) {
      console.log(error);
    }
  }
  return (
    <div className='bg-[#97b5fe] h-screen w-screen flex justify-center py-6'>
      {!isUserLoggedIn ? <ConnectWalletButton connectWallet={connectWallet} /> :
        correctNetwork ? <TodoList tasks={tasks} input={input} setInput={setInput} addTask={addTask} deleteTask={deleteTask} /> : <WrongNetworkMessage />}
    </div>
  )
}

