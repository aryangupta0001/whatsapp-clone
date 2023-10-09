import React, { useContext, useEffect } from 'react';
// import Context from '../context/Context';


const Chat = (props) => {

    useEffect(() => {
        const chats = document.getElementsByClassName("chat");

        for (const chat of chats) {
            const imgWidth = chat.firstElementChild.offsetWidth;
            chat.lastElementChild.style.width = chat.offsetWidth - imgWidth + "px";
        }
    })

    return (
        <div id='chat' className='flex chat'>
            <div id="profileImg" className='flexVCenter' >
                <img src={props.img} alt="" className='h100' />
            </div>

            <div id='chatName'>
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
