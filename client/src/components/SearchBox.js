import React, {useState,useEffect}from 'react';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SearchBox = props => {
    const [mails,setMails] = useState(0);
    useEffect(()=>
    {
        getMailsNumber();
    },[]);
    const getMailsNumber = async()=>
    {
        try {
            const res = await axios.get('/api/messages');
            setMails(res.data.data.length);
          
        } catch (error) {
            
        }
    }
    return (
        <div className="mb-4 mx-3">
            <div className="row d-flex justify-content-between">
                <div className="col-md-3"><div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for emails"/>
                        <div className="input-group-append">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faSearch}/> </span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <Link to='/createmessage'><button className="btn btn-primary ">New Email</button></Link>
                </div>
            </div>
            <p className="mt-3 font-weight-bold text-secondary">{`Results: ${mails} mail(s)`}</p>
        </div>

    )
}

export default SearchBox
