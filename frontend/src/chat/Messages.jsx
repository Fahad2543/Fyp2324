import React from 'react';
import styled from 'styled-components';
import Message from './Message';
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

// Define Styled Components for Messages
const MessagesWrapper = styled.div`
  padding: 0 16px;
  flex: 1;
  overflow: auto;
  padding: 10px;
`;

const Messages = () => {
    useGetMessages(); // Ensure this hook is fetching messages
    useGetRealTimeMessage(); // Ensure this hook is for real-time updates
    const { messages } = useSelector(store => store.message);

    return (
        <MessagesWrapper>
            {
                messages && messages?.map((message) => {
                    return (
                        <Message key={message._id} message={message} />
                    )
                })
            }
        </MessagesWrapper>
    )
}

export default Messages;
