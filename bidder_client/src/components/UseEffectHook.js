import React, { useEffect, useState } from 'react';

export default function UseEffectHook() {
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    // const [name, setName] = useState('');


    useEffect(() => {
            console.log('now you are inside useEffect function')
            return () => {
                console.log('componentWillUnmount');
            }
        }, [])
        return (
            <div>
                {date.toLocaleString()}
                <button onClick={()=> setCount(count + 1)}>Count + 1</button>
            </div>
        )
}