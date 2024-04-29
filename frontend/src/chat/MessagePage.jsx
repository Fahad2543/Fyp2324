import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import MessageContainer from './MessageContainer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

// Define Styled Components for MessagePage
const MessagePageContainer = styled.div`
  display: flex;
  height: 100%;
`;

const MessagePage = () => {
    const { authUser } = useSelector(store => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authUser) {
            navigate("/login");
        }
    }, [authUser, navigate]);

    return (
        <Layout>
            <MessagePageContainer>
                <Sidebar />
                <MessageContainer />
            </MessagePageContainer>
        </Layout>
    );
}

export default MessagePage;
