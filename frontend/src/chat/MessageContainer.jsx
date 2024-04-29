import React, { useEffect } from 'react';
import styled from 'styled-components';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector, useDispatch } from "react-redux";

// Define Styled Components for MessageContainer
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 75px;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
 padding: 3px;
 
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Username = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  font-size: 18px;
  color: #3aafa9;
  font-weight: bold;
`;

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const isOnline = onlineUsers?.includes(selectedUser?._id);

   return (
        <>
            {
                selectedUser !== null ? (
                    <Container>
                        <div className='d-flex'>
                            <Avatar className={isOnline ? 'online' : ''}>
                                <img src={selectedUser?.profilePhoto} alt="user-profile" />
                            </Avatar>
                            <Username>
                                <p>{selectedUser?.fullName}</p>
                            </Username>
                        </div>
                        <Messages />
                        <SendInput />
                    </Container>
                ) : (
                    <Container>
                        <h1 className='text-4xl text-white font-bold'>Hi, {authUser?.fullName}</h1>
                        <h1 className='text-2xl text-white'>Let's start conversation</h1>
                    </Container>
                )
            }
        </>

    )
}

export default MessageContainer;
