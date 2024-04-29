import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

// Define Styled Components for Message
const Chat = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
`;

const ChatImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  padding: 0 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ChatHeader = styled.div`
  margin-left: 10px;

`;

const ChatBubble = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.isSender ? '#3aafa9' : '#fff'};
  color: ${props => props.isSender ? '#fff' : '#000'};
`;

const Time = styled.time`
  font-size: 12px;
  opacity: 0.5;
  padding: 8px;
`;

const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const isSender = message?.senderId === authUser?._id;

    return (
        <Chat ref={scroll}>
            <ChatImage>
                <img alt="Profile" src={isSender ? authUser?.profilePhoto : selectedUser?.profilePhoto} />
            </ChatImage>
            <ChatHeader>
                <Time>12:45</Time>
            </ChatHeader>
            <ChatBubble isSender={isSender}>{message?.message}</ChatBubble>
        </Chat>
    )
}

export default Message;
