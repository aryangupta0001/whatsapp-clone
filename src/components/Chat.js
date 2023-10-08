import React, { useContext, useEffect } from 'react';
// import Context from '../context/Context';


const Chat = (props) => {
    return (
        <div id='chat' className='flex'>
            <div id="profileImg" className='flexVCenter' >
                <img src={props.img} alt="" className='h100' />
            </div>

            <div>
                <div id="chatName">
                    {props.name}
                </div>
                <div id="lastMsg">

                </div>
            </div>
        </div>
    )
}

export default Chat
