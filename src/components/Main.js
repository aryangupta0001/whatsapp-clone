import React, { useContext, useEffect, useState } from 'react'
import Chat from './Chat';
// import Context from "../context/Context";

const Main = () => {

    const [chatSearch, setChatSearch] = useState("");
    const [clearChatSearchVisible, setClearChatSearchVisible] = useState(false);

    useEffect(() => {
        if (chatSearch.length === 0) {
            setClearChatSearchVisible(false);
        }

        else {
            setClearChatSearchVisible(true);
        }
    }, [chatSearch]);

    const onChange = async (e) => {
        setChatSearch(e.target.value);
    }


    const chatList = [

        {
            id: 1,
            name: "Abhisek Tamang",
            img: "/assets/images/chats/Abhisek Tamang.jpg"
        },

        {
            id: 2,
            name: "ANDREW LINDER",
            img: "/assets/images/chats/ANDREW LINDER.jpg"
        },

        {
            id: 3,
            name: "Jonah Hill",
            img: "/assets/images/chats/Jonah Hill.jpg"
        },

        {
            id: 4,
            name: "Chris Evans",
            img: "/assets/images/chats/Chris Evans.jpg"
        },

        {
            id: 5,
            name: "Sandeep Nainwal",
            img: "/assets/images/chats/Sandeep Nainwal.jpg"
        },

        {
            id: 6,
            name: "Michael",
            img: "/assets/images/chats/Michael.jpg"
        },

        {
            id: 7,
            name: "Johnny Depp",
            img: "/assets/images/chats/Johnny Depp.jpg"
        },

        {
            id: 8,
            name: "Hani Abdel-Warith",
            img: "/assets/images/chats/Hani Abdel-Warith.jpg"
        },

        {
            id: 9,
            name: "Chris Pratt",
            img: "/assets/images/chats/Chris Pratt.jpg"
        },

        {
            id: 10,
            name: "Ramit Sethi",
            img: "/assets/images/chats/Ramit Sethi.jpg"
        },

        {
            id: 11,
            name: "Rocco Giannetti",
            img: "/assets/images/chats/Rocco Giannetti.jpg"
        },

        {
            id: 12,
            name: "Will Smith",
            img: "/assets/images/chats/Will Smith.jpg"
        }


    ]

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

                            <img src={require("./icons/erase_search.png")} alt="" id='clearChatSearch' onClick={() => { setChatSearch("") }} style={{ display: clearChatSearchVisible ? "block" : "none" }} />
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
                    <div id="chats" className='pointer w100'>
                        {
                            chatList.map(
                                (chat) => (
                                    <Chat key={chat.id} img={chat.img} name={chat.name} />
                                )
                            )
                        }
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