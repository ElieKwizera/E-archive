import React from 'react';
import App from '../../pages/App';
import {shallow} from 'enzyme';
import MessageTable from '../MessageTable';
import SearchBox from '../SearchBox';
import AddMessage from '../../pages/AddMessage';



it('shows table of emails', ()=> {
   const component = shallow(<App/>);
   expect(component.find(MessageTable));
});


it('shows searchbox', ()=> {
    const component = shallow(<App/>);
    expect(component.find(SearchBox));
 });
 
 it('shows new message page', ()=> {
    const component = shallow(<App/>);
    expect(component.find(AddMessage));
 });
 

