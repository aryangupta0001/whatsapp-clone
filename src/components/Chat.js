import React, { useContext, useEffect } from 'react';
// import Context from '../context/Context';


const Chat = (props) => {

    useEffect(() => {
        const profileImg = document.getElementById("profileImg");
        profileImg.style.width = profileImg.offsetHeight;
    }, [])
    return (
        <div id='chat' className='flex'>
            <div id="profileImg" >
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
