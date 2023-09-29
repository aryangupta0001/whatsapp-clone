import React, { useState } from 'react'

const Main = () => {

    const [chatSearch, setChatSearch] = useState("");
    
    const onChange = (e) => {
        try {
            setChatSearch(e.target.value);
        }
        catch { }

        if (chatSearch.length === 0) {
            document.getElementById("clearChatSearch").style.display = "none";
        }
        else {
            document.getElementById("clearChatSearch").style.display = "block";
        }

        console.log(chatSearch.length);
    }

    return (
        <div id='mainContainer'>
            <div id='main'>
                <div id="chatList">
                    <div id="topNav" className='flex'>

                        <div id="profilePhoto">
                            <img src={require("./profilePhoto.png")} alt="" />
                        </div>

                        <div className='flex' id='statusSection'>
                            {/* <div id="communities"> */}
                            <img src={require("./communities.png")} alt="" />
                            {/* </div> */}
                            {/* <div id="status"> */}
                            <img src={require("./status.png")} alt="" />
                            {/* </div> */}
                            {/* <div id="channels"> */}
                            <img src={require("./channels.png")} alt="" />
                            {/* </div> */}
                            {/* <div id="newChat"> */}
                            <img src={require("./newChat.png")} alt="" />
                            {/* </div> */}
                            {/* <div id="menu"> */}
                            <img src={require("./menu.png")} alt="" />
                            {/* </div> */}
                        </div>
                    </div>

                    <div id="searchBar" className='flex'>
                        <div className='flex'>
                            <img src={require("./magnifying_glass.png")} alt="" />
                            <input type="text" name="chatName" id="chatSearch" placeholder='Search or start new chat' value={chatSearch} onChange={onChange} />
                            <img src={require("./erase_search.png")} alt="" id='clearChatSearch' onClick={() => { setChatSearch("") }} />
                        </div>
                        <img src={require("./filters.png")} alt="" id='filter' />

                    </div>

                    <div id="chats">

                    </div>
                </div>

                <div id="messages">

                </div>
            </div>
        </div>
    )
}

export default Main