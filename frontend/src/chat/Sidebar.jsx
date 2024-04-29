import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers, setSelectedUser } from '../redux/userSlice';
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '..';

const SidebarWrapper = styled.div`
  width: 35%;
  min-width: 200px; /* Specify a minimum width to prevent it from collapsing */
  border-right: 1px solid #3aafa9;
  padding: 20px;
  display: flex;
  margin-top: 65px;
  flex-direction: column;
  
`;

const SearchForm = styled.form`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #3aafa9;
  border-radius: 20px;
  
`;

const SubmitButton = styled.button`
  background-color: #3aafa9;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  margin-left: 15px;
  flex: 1;
`;

const LogoutButton = styled.button`
  background-color: #3aafa9;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
`;

const Sidebar = () => {
    const [search, setSearch] = useState("");
    const { otherUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/auth/logout`);
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null));
            dispatch(setMessages(null));
            dispatch(setOtherUsers(null));
            dispatch(setSelectedUser(null));
        } catch (error) {
            console.log(error);
        }
    }

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser) {
            dispatch(setOtherUsers([conversationUser]));
        } else {
            toast.error("User not found!");
        }
    }

    return (
        <SidebarWrapper>
            <SearchForm onSubmit={searchSubmitHandler}>
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder='Search...'
                />
                <SubmitButton type='submit'>
                    <BiSearchAlt2 style={{ width: '20px', height: '20px' }} />
                </SubmitButton>
            </SearchForm>
            <div className="border-top my-0 py-0"></div>
            <OtherUsers />
            {/* <div className='mt-2'>
                <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
            </div> */}
        </SidebarWrapper>
    )
}

export default Sidebar;
