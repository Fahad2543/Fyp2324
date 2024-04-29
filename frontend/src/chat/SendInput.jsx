import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSend } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from '../redux/messageSlice';
import { BASE_URL } from '../index';

const SendInputWrapper = styled.form`
  padding:16px;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputField = styled.input`
  width: calc(100% - 40px); /* Adjust width based on button size */
  padding: 10px;
  border-radius: 10px 0 0 10px;
  background-color: #f0f0f0;
  font-size: 14px;
  color: #3aafa9;
  height: 40px;
`;

const SendButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: none;
  background-color: #3aafa9;
  color: #ffffff;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  width: 40PX;
  height: 40px;
  margin-left: 10px;
`;

const SendInput = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);
    const { messages } = useSelector(store => store.message);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/api/v1/message/send/${selectedUser?._id}`, { message }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            dispatch(setMessages([...messages, res?.data?.newMessage]))
        } catch (error) {
            console.log(error);
        }
        setMessage("");
    }

    return (
        <SendInputWrapper onSubmit={onSubmitHandler}>
            <InputContainer>
                <InputField
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder='Send a message...'
                />
                <SendButton type="submit">
                    <IoSend />
                </SendButton>
            </InputContainer>
        </SendInputWrapper>
    )
}

export default SendInput;
