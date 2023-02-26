import React, { memo, useEffect, useState } from 'react'

function Memos({ state }) {


    const [memos, setMemos] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const getData = async () => {
            const data = await contract.getMemos();
            setMemos(data);
        }
        contract && getData();

    }, [contract])


    return (
        <div className="memosDiv">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Transaction Time</th>
                        <th>Message</th>
                        <th>Sender Address</th>
                    </tr>

                    {memos && memos.map((memo, index) => {
                        return <tr key={index}>
                            <th>{memo.name}</th>
                            <th>{new Date(memo.timeStamp * 1000).toLocaleString()}</th>
                            <th>{memo.message}</th>
                            <th>{memo.sender}</th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Memos