import React, { useState } from 'react'


function Buy({ state }) {

    const [stateValue, setStateValue] = useState({
        name: "",
        message: "",
        ether: ""
    });
    const { name, message, ether } = stateValue;

    const onValueChangedHandler = (event) => {
        setStateValue({
            ...stateValue,
            [event.target.name]: event.target.value,
        })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();


        setStateValue({
            name: "",
            message: "",
            ether: ""
        })
    }




    return (

        <div className='buyMainDiv'>
            <h1>Buy Me A <br /><span>Coffee</span></h1>
            <form onSubmit={formSubmitHandler}>
                <dir className='formItem1' >
                    <label htmlFor="senderName">Name:</label>
                    <input name="name" required value={name} onChange={onValueChangedHandler} className='senderName' placeholder='Enter your name..' type="text" />
                </dir>
                <div className='formItem2'>
                    <label htmlFor="senderMessage">Message</label>
                    <input name="message" required value={message} onChange={onValueChangedHandler} className='senderMessage' placeholder='Enter your message..' type="text" />
                </div>
                <div className='formItem3'>
                    <label htmlFor="ether">Amount (eth)</label>
                    <input name="ether" required value={ether} onChange={onValueChangedHandler} className='senderMessage' placeholder='0.1 eth' type="number" />
                </div>

                <button className='payBtn' type='submit'>Pay</button>
            </form>
        </div>
    )
}

export default Buy