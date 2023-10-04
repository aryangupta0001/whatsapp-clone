import React from 'react'

const Chat = (props) => {
    // const imgPath = "./chats/" + props.name;
    console.log(props.name);
    console.log(props.img);
    console.log("./chats/" + props.name + ".jpg");
    return (
        <div className='flex'>
            <div id="profileImg">
                <img src={"./chats/" + props.name + ".jpg"} alt="" style={{ height: "100px", width: "100px" }} />
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
