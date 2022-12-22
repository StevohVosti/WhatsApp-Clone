import { useContext, useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { UserContext } from '../../../Context/UserProvider';
import { AccountContext } from '../../../Context/AccountProvider';
import { getConversation } from '../../../Service/api';

//components
import ChatHeader from './ChatHeader.jsx';
import Messages from './Messages.jsx';

const ChatBox = () => {
    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox;