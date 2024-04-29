import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';

// Define Styled Components for OtherUser
const UserItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
   
  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }

  &.selected {
    background-color: #f0f0f0;
    color: #000;
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  padding:10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }
`;

const Username = styled.div`
  flex-grow: 1;
  margin-left: 12px;
  padding:10px;
  
  
`;

const Divider = styled.div`
  height: 1px;
  margin: 8px 0;
  background-color: #3aafa9;
`;

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser, onlineUsers } = useSelector(store => store.user);
    const isOnline = onlineUsers?.includes(user._id);

    const handleUserSelection = (user) => {
        dispatch(setSelectedUser(user));
    };

    return (
        <>
            <UserItem
                onClick={() => handleUserSelection(user)}
                className={`${selectedUser?._id === user?._id ? 'selected' : ''}`}
            >
                <Avatar className={isOnline ? 'online' : ''}>
                    <img src={user?.profilePhoto} alt="user-profile" />
                </Avatar>
                <Username>
                    <p>{user?.fullName}</p>
                </Username>
            </UserItem>
            <Divider />
        </>
    );
}

export default OtherUser;
