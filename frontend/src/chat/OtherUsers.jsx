import React from 'react';
import styled from 'styled-components';
import OtherUser from './OtherUser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from "react-redux";

// Define Styled Components for OtherUsers
const OtherUsersWrapper = styled.div`
  overflow: auto;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  
`;

const OtherUsers = () => {
    useGetOtherUsers(); // Custom hook to fetch other users
    const { otherUsers } = useSelector(store => store.user);

    if (!otherUsers) return null; // Early return if otherUsers is null

    return (
        <OtherUsersWrapper>
            {
                otherUsers?.map((user) => {
                    return (
                        <OtherUser key={user._id} user={user} />
                    )
                })
            }
        </OtherUsersWrapper>
    );
}

export default OtherUsers;
