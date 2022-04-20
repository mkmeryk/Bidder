import React, { useState } from 'react';

export default function UseStateHook() {
    const [ count, setCount ] = useState(0)


    return(
        <div>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Add 1
            </button>
            <br/>
            { count }
        </div>
    )
}
