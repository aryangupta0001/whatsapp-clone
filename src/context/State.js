import React, { useState } from 'react'
import Context from './Context';


const State = (props) => {
    const [chatsImg, setChatImg] = useState([]);

    return (
        <Context.Provider value={{ chatsImg, setChatImg }}>
            {props.childrean}
        </Context.Provider>
    )
}

export default State;
