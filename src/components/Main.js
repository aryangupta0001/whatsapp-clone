import React, { useEffect, useState } from 'react'
import Chat from './Chat';

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

    const chatList = [

        {
            id: 1,
            name: "Abhisek Tamang",
            img: "./chats/Abhisek.jpg"
        },

        {
            id: 2,
            name: "ANDREW LINDER",
            img: "./chats/ANDREW LINDER.jpg"
        },

        {
            id: 3,
            name: "Jonah Hill",
            img: "./chats/Jonah Hill.webp"
        },

        {
            id: 4,
            name: "Chris Evans",
            img: "./chats/Chris Evans.jpg"
        },

        {
            id: 5,
            name: "Sandeep Nainwal",
            img: "./chats/Sandeep Nainwal.jpg"
        },

        {
            id: 6,
            name: "Michael",
            img: "./chats/Michael.jpg"
        },

        {
            id: 7,
            name: "Johnny Depp",
            img: "./chats/Johnny Depp.webp"
        },

        {
            id: 8,
            name: "Hani Abdel-Warith",
            img: "./chats/Hani Abdel-Warith.jpeg"
        },

        {
            id: 9,
            name: "Chris Pratt",
            img: "./chats/Chris Pratt.avif"
        },

        {
            id: 10,
            name: "Ramit Sethi",
            img: "./chats/Ramit Sethi.jpg"
        },

        {
            id: 11,
            name: "Rocco Giannetti",
            img: "./chats/Rocco Giannetti.jpg"
        },

        {
            id: 12,
            name: "Will Smith",
            img: "./chats/Will Smith.jpg"
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

                    <div id="chats" className='pointer w100'>
                        {
                            chatList.map(
                                (chat) => (
                                    <Chat key={chat.id} name={chat.name} img={chat.img} />
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