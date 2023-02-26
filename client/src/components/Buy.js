import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import ProgressBar from './ProgressBar';

function Buy({ state }) {
    const [transactionStatus, setTransactionStatus] = useState(false);
    const [processState, setProcessState] = useState(false);
    const [stateValue, setStateValue] = useState({
        name: "",
        message: "",
        ether: ""
    });
    const { contract } = state;
    const { name, message, ether } = stateValue;


    const onValueChangedHandler = (event) => {
        setStateValue({
            ...stateValue,
            [event.target.name]: event.target.value,
        })
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        setProcessState(true);
        const amount = { value: ethers.utils.parseEther(ether.toString()) };
        const transaction = await contract.buyCoffee(name, message, amount);
        await transaction.wait();
        setTransactionStatus(true);
        setProcessState(false);
        setStateValue({
            name: "",
            message: "",
            ether: ""
        })
    }




    return (
        <>
            <div className='buyMainDiv'>
                <h1>Buy Me A<br /><span>Coffee</span></h1>
                <form onSubmit={formSubmitHandler}>
                    <dir className='formItem1' >
                        <label htmlFor="senderName">Name:</label>
                        <input disabled={processState} name="name" required value={name} onChange={onValueChangedHandler} className='senderName' placeholder='Enter your name..' type="text" />
                    </dir>
                    <div className='formItem2'>
                        <label htmlFor="senderMessage">Message</label>
                        <input disabled={processState} autoComplete='false' name="message" required value={message} onChange={onValueChangedHandler} className='senderMessage' placeholder='Enter your message..' type="text" />
                    </div>
                    <div className='formItem3'>
                        <label htmlFor="ether">Amount (eth)</label>
                        <input disabled={processState} name="ether" required value={ether} onChange={onValueChangedHandler} className='senderMessage' placeholder='0.1 eth' type="number" />
                    </div>

                    <button disabled={processState} className='payBtn' type='submit'>Pay</button>
                </form>
            </div>
            {transactionStatus && <h3 className='transactionStatus'>Transaction Complete.</h3>}
            <div className='progressbarDiv'>
                {processState && <ProgressBar />}
            </div>

        </>
    )

}

export default Buy;