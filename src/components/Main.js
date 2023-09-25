import React from 'react'

const Main = () => {
    return (
        <div id='mainContainer'>
            <div id='main'>
                <div id="chatList">
                    <div id="statusBar" className='flex'>
                        <div id="profilePhoto">
                            <img src={require("./profilePhoto.png")} alt="" />
                        </div>
                        <div id="status">
                            <img src={require("./status.png")} alt="" />
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
