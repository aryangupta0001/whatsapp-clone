import React from 'react'

const Main = () => {
    return (
        <div id='mainContainer'>
            <div id='main'>
                <div id="chatList">
                    <div id="topNav" className='flex'>

                        <div id="profilePhoto">
                            <img src={require("./profilePhoto.png")} alt="" />
                        </div>

                        <div className='flex' id='statusSection'>
                            <div id="communities">
                                <img src={require("./communities.png")} alt="" />
                            </div>
                            <div id="status">
                                <img src={require("./status.png")} alt="" />
                            </div>
                            <div id="channels">
                                <img src={require("./channels.png")} alt="" />
                            </div>
                            <div id="newChat">
                                <img src={require("./newChat.png")} alt="" />
                            </div>
                            <div id="menu">
                                <img src={require("./menu.png")} alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="searchBar">

                    </div>
                    <div id="chatList">

                    </div>
                </div>

                <div id="messages">

                </div>
            </div>
        </div>
    )
}

export default Main
