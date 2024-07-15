import React, { useEffect, useState } from 'react'
import { CiMenuKebab } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { LiaCheckDoubleSolid } from 'react-icons/lia';
import { useNavigate, useParams } from 'react-router-dom';

const Chat = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const {id,name,light}= useParams();
    const getChatData = async(id)=>{
        console.log(id,name);
        const responce = await fetch(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
        );
        if(responce.ok){
            const chat = await responce.json();
            console.log(chat)
            console.log(chat);
            setData(chat.data);
        }
    }
    function getInitials(name) {
      const parts = name.split(" ");
      let initials = "";
      parts.forEach((part) => {
        if (part) {
          initials += part[0].toUpperCase();
        }
      });

      return initials;
    }

    function formatTime(timestamp) {
      const date = new Date(timestamp);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const timeString = `${hours}:${minutes}.${ampm}`;

      return timeString;
    }

    useEffect(()=>{
        getChatData(id);
    },[])
    console.log(data);

  return (
    <>
      <div className="chat">
        <div className={`chat-head ${light? "light-chat-head" : ""}`}>
          <div className="arrow" onClick={() => navigate("/")}>
            <FaArrowLeft />
          </div>
          <div className="user-prf">{getInitials(name)}</div>
          <div className="head-body">
            <div className="head-name">{name}</div>
            <div className="head-des">last seen at 6:10pm</div>
          </div>
          <div className="headicons">
            <div className="call">
              <IoMdCall />
            </div>
            <div className="head-menu">
              <CiMenuKebab />
            </div>
          </div>
        </div>
        <div className={`chat-body ${light ? "light-chat-body" : ""}`}>
          {data.map((message, index) => {
            if (message.sender.name === "BeyondChat") {
              return (
                <span key={index} className={`user-chat ${light ? "light-user-chat" : ""}`}>
                  {message.message}
                  <div className={`time tc ${light ? "light-tc" : ""}`}>
                    {formatTime(message.updated_at)}
                    <LiaCheckDoubleSolid className="tick" />
                  </div>
                </span>
              );
            } else {
              return (
                <span key={index} className={`client-chat ${light ? "light-client-chat" : ""}`}>
                  {message.message}
                  <div className="time">{formatTime(message.updated_at)}</div>
                </span>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Chat