import React from 'react'

const Chat = (props) => {

    return (
        <div className='flex'>
            <div id="profileImg">
                <img src={props.img} alt="" style={{height: "100px", width: "100px"}} />
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
