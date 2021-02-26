import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import  emailValidator from 'email-validator';

const AddMessage = () => {

    const [sender,setSender] = useState('');
    const [receiver,setReceiver] = useState('');
    const [body,setBody] = useState('');
    const [subject, setSubject] = useState('');
    const [errors,setErrors] = useState({});


    let history = useHistory();
    const formStyle = {
        padding: '2rem'
    }

    const sendMessage =async (event)=>
    {
       
        
        event.preventDefault();
        const formerrors = {};
        if(sender === '')
        formerrors.sender ='sender email can not be empty';
        if(receiver === '')
        formerrors.receiver = 'receiver email can not be empty'
        if(subject === '')
        formerrors.subject= 'subject can not be empty';
        if(body === '')
        formerrors.body= 'Email body can not be empty';

        if(! emailValidator.validate(sender))
        formerrors.sender ='Invalid sender email';
        if(! emailValidator.validate(receiver))
        formerrors.receiver ='Invalid receiver email';

        if(Object.keys(formerrors).length === 0)
        {
            try 
            {
                const message = {
                    from: sender,
                    to:receiver,
                    body:body,
                    subject: subject
                };
                await axios.post('/api/messages', message);
                console.log("form submitted");
                console.log(errors);
                history.push('/');
              
            } catch (error) 
            {
                
            }
           
        }
        else
        {
            setErrors(formerrors);
            console.log(errors);
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                    <form
                    onSubmit={sendMessage}
                    className="mt-5 border-top border-top border-left border-right border-bottom"
                    style={formStyle} >
                    <div className="form-group">
                    <label htmlFor="sender">Sender email address</label>
                    <input value={sender} onChange={ e => setSender(e.target.value)} type="email" className="form-control" id="sender" aria-describedby="emailHelp" placeholder="Enter sender email"/>
                    </div>
                    {errors && (<small className="text-danger"> {errors.sender}</small>)}
                    <div className="form-group">
                    <label htmlFor="receiver">Receiver email address</label>
                    <input  value={receiver}  onChange={ e => setReceiver(e.target.value)}type="email" className="form-control" id="receiver" aria-describedby="emailHelp" placeholder="Enter receiver email"/>
                    </div>
                    {errors && <small className="text-danger"> {errors.receiver}</small>}

                    <div className="form-group">
                    <label htmlFor="receiver">Subject</label>
                    <input  value={subject}  onChange={ e => setSubject(e.target.value)}type="text" className="form-control" id="receiver" aria-describedby="emailHelp" placeholder="Enter the subject"/>
                    </div>
                    {errors && (<small className="text-danger"> {errors.subject}</small>)}

                    <div className="form-group">
                        <label htmlFor="body">Message body</label>
                        <textarea value={body}  onChange={ e => setBody(e.target.value)} rows='2'  id="body" className="form-control"/>
                    </div>
                    {errors && (<small className="text-danger"> {errors.body}</small>)}

                    <div className="d-flex justify-content-end">
                        <Link to='/'>
                            <button className="btn btn-secondary ">Cancel</button>
                        </Link>
                      
                        <button type="submit" className="btn btn-primary mx-2">Send</button>
                    </div>               
                </form>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default AddMessage
