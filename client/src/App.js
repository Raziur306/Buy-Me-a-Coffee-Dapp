import React, { useState, useEffect } from 'react';

import { ethers } from 'ethers';
import abi from './constract/Coffee.json'
import Buy from './components/Buy';
import Memos from './components/Memos';



function App() {

    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });

    useEffect(() => {

        const connectWallet = async () => {

            const contractAddress = "0x124d56Dd049a78AD9826aB6AD93BF03AC638e43C";
            const contractABI = abi.abi;
            try {
                const { ethereum } = window;
                if (ethereum) {
                    const account = await ethereum.request({ method: "eth_requestAccounts" });
                }

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractABI, signer);

                setState({
                    ...state,
                    provider,
                    signer,
                    contract,
                })


            } catch (error) {
                console.log(error);
            }
        }

        connectWallet()
    }, [])

    return <div>
        <Buy state={state} />
        <Memos state={state} />
    </div>



}

export default App;
