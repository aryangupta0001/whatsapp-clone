import React, { useEffect, useState } from 'react'

const Main = () => {

    const [chatSearch, setChatSearch] = useState("");

    useEffect(() => {
        if (chatSearch.length === 0) {
            document.getElementById("clearChatSearch").style.display = "none";
        } else {
            document.getElementById("clearChatSearch").style.display = "block";
        }
    }, [chatSearch]);

    const onChange = async (e) => {
        setChatSearch(e.target.value);
    }

    const chatList = {
        "Abhisek Tamang": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Abhisek Tamang.jpg",
        "ANDREW LINDER": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/ANDREW LINDER.jpg",
        "Jonah Hill": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Jonah Hill.webp",
        "Chris Evans": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Chris Evans.jpg",
        "Sandeep Nainwal": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Sandeep Nainwal.jpg",
        "Michael": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Michael.jpg",
        "Johnny Depp": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Johnny Depp.webp",
        "Hani Abdel-Warith": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Hani Abdel-Warith.jpeg",
        "Chris Pratt": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Chris Pratt.avif",
        "Ramit Sethi": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Ramit Sethi.jpg",
        "Rocco Giannetti": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Rocco Giannetti.jpg",
        "Will Smith": "E:/RANBEER/CODE/WEB DEV/MERN/REACT/whatsapp-clone/src/components/chats/Will Smith.jpg"
    }

    return (
        <div id='mainContainer' className='flexHCenter flexVCenter'>
            <div id='main' className='flex'>
                <div id="chatList" className='h100'>
                    <div id="topNav" className='flexVCenter w100'>

                        <div id="profilePhoto">
                            <img src={require("./icons/profilePhoto.png")} alt="" className='h100' />
                        </div>

                        <div id='statusSection' className='flexVCenter h100'>
                            <img src={require("./icons/communities.png")} alt="" />
                            <img src={require("./icons/status.png")} alt="" />
                            <img src={require("./icons/channels.png")} alt="" />
                            <img src={require("./icons/newChat.png")} alt="" />
                            <img src={require("./icons/menu.png")} alt="" />
                        </div>
                    </div>

                    <div id="searchBar" className='flexVCenter'>
                        <div className='flexVCenter'>
                            <img src={require("./icons/magnifying_glass.png")} alt="" />
                            <input type="text" name="chatName" id="chatSearch" placeholder='Search or start new chat' value={chatSearch} onChange={onChange} className='fFamily1' />
                            <img src={require("./icons/erase_search.png")} alt="" id='clearChatSearch' onClick={() => { setChatSearch("") }} />
                        </div>

                        <img src={require("./icons/filters.png")} alt="" id='filter' />

                    </div>

                    <div id="archived" className='flexVCenter w100 pointer'>
                        <div className='flexCenter h100'>
                            <img src={require("./icons/archived.png")} alt="" />
                        </div>

                        <div className='flexVCenter h100 fFamily1'>
                            Archived
                        </div>
                    </div>

                    <div id="chats" className='pointer'>

                    </div>
                </div>

                <div id="messageSecWall" className='flex fFamily1'>
                    <div id='' className='flexVCenter w100'>
                        <img src={require("./icons/whatsapp.png")} alt="" />
                        <h1>
                            Download WhatsApp for Windows
                        </h1>

                        <p className='w50'>
                            Make calls, share your screen and get a faster experience when you download the Windows app.
                        </p>

                        <div id="getAppBtn" className='pointer'>
                            Get the app
                        </div>
                    </div>

                    <div className='flexVCenter' id='encryptionMsg'>
                        <img src={require("./icons/lock.png")} alt="" className='h100' />
                        <p>Your personal messages are end-to-end encrypted</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main