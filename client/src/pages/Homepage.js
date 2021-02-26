import React from 'react'
import MessageTable from '../components/MessageTable';
import SearchBox from '../components/SearchBox';
const Homepage = () => {

    const tableStyle = {
        marginTop: '20vh' 
    };

    return (
       <div className="container" style={tableStyle}>
           <SearchBox/>
           <MessageTable/>
       </div>
    )
}

export default Homepage