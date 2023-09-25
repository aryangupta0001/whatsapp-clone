import React from 'react'

const Main = () => {
    return (
        <div id='mainContainer'>
            <div id='main'>
                <div id="chatList">
                    <div id="statusBar">
                        <div id="profilePhoto">
                            <img src={require("./profilePhoto.png")} alt="" />
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
