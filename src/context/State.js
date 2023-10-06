import React, { useState } from 'react'
import Context from './Context';


const State = (props) => {
    const [chatImg, setChatImg] = useState([]);

    return (
        <Context.Provider value={{ chatImg, setChatImg }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;
