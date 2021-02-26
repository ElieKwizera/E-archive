import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import moment from 'moment';

const MessageTable = () => {

    const [messages,setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const headerStyle = {
        backgroundColor: '#F6F5F5'
    };

    useEffect(()=>
    {
        getMessages();
    },[loading]);

    const getMessages = async ()=>
    {
        try {
            const res = await axios.get('/api/messages');
            setMessages(res.data.data);
            setLoading(false);
        } catch (error) {
            
        }
    }

    return (
        <div className="container">

            { loading ? (<p>Fetching messages</p> ) : 
            (   <table className="table">
                <thead style={headerStyle}>
                    <tr>
                    <th scope="col" className="text-secondary font-weight-bold">From</th>
                    <th scope="col" className="text-secondary font-weight-bold">To</th>
                    <th scope="col" className="text-secondary font-weight-bold">Subject</th>
                    <th scope="col" className="text-secondary font-weight-bold">Body</th>
                    <th scope="col" className="text-secondary font-weight-bold">Date <span> <FontAwesomeIcon icon={faCaretDown}/> </span></th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(message =>
                    {
                        return(
                            <tr key={message.id}>
                                <td > {message.from}</td>
                                <td >{message.to}</td>
                                <td>{message.subject}</td>
                                <td>{message.messageBody}</td>
                                <td>{moment(message.createdAt).format("MMM Do, h:mm a")}</td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table> ) 
            }
   

        </div>
    )
}

export default MessageTable
