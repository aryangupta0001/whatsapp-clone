import React, { useEffect, useState } from 'react'

const Main = () => {

    const [chatSearch, setChatSearch] = useState("");

    useEffect(() => {
        if (chatSearch.length === 0) {
            document.getElementById("clearChatSearch").style.display = "none";
        } else {
            document.getElementById("clearChatSearch").style.display = "block";
        }

        console.log(chatSearch.length);
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
        <div id='mainContainer'>
            <div id='main' className='flex'>
                <div id="chatList">
                    <div id="topNav" className='flex'>

                        <div id="profilePhoto">
                            <img src={require("./profilePhoto.png")} alt="" />
                        </div>

                        <div className='flex' id='statusSection'>
                            <img src={require("./communities.png")} alt="" />
                            <img src={require("./status.png")} alt="" />
                            <img src={require("./channels.png")} alt="" />
                            <img src={require("./newChat.png")} alt="" />
                            <img src={require("./menu.png")} alt="" />
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

                    <div id="archived" className='flex'>
                        <div className='flex'>
                            <img src={require("./archived.png")} alt="" />
                        </div>

                        <div className='flex'>
                            Archived
                        </div>
                    </div>

                    <div id="chats">

                    </div>
                </div>

                <div id="messages" className='flex'>
                    <div className='flex'>
                        <img src={require("./whatsapp.png")} alt="" />
                        <h1>
                            Download WhatsApp for Windows
                        </h1>

                        <p>
                            Make calls, share your screen and get a faster experience when you download the Windows app.
                        </p>

                        <div id="getAppBtn">
                            Get the app
                        </div>
                    </div>

                    <div className='flex' id='encryptionMsg'>
                        <img src={require("./lock.png")} alt="" />
                        <p>Your personal messages are end-to-end encrypted</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main