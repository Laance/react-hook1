import React from 'react';
import Contact from './Contact';

const ContactList = ({ contactsDataList }) => {
    return <div className='phone-book'>
        {contactsDataList.map((contact, index) =>
        <Contact key={index} phone={contact.phone} name={contact.firstName} surname={contact.lastName} gender={contact.gender} />)}
    </div>
}
export default ContactList;