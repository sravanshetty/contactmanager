import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

import 'bootstrap/dist/css/bootstrap.min.css';

class Contacts extends Component {

  constructor(){
    super();
    // this.state = {
    //   contacts : [
    //     {
    //       id : 1,
    //       name : 'John Doe',
    //       email : 'jdoe@gmail.com',
    //       phone : '555-555-5555'
    //     },
    //     {
    //       id : 2,
    //       name : 'Karen Williams',
    //       email : 'karen@gmail.com',
    //       phone : '666-666-6666'
    //     },
    //     {
    //       id : 3,
    //       name : 'Henry Jhonson',
    //       email : 'henry@gmail.com',
    //       phone : '777-777-7777'
    //     }
    //   ]
    // }
  }

  deleteContact = (id) =>{
    /*-----accessing through state start-------*/
    // const { contacts } = this.state;
    // const newContacts = contacts.filter(contact =>
    //   contact.id != id
    // );
    // console.log(newContacts);
    // this.setState({contacts : newContacts})
    // deleteClickHandler={this.deleteContact.bind(this,contact.id)}
    /*-----accessing through state end-------*/
  }

  render() {
    return(
      <Consumer>
        {value => {
          const {contacts} = value;
          return(
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>List
              </h1>
              { contacts.map(contact => (
                  <Contact
                  key={contact.id}
                  contact={contact}
                />
                ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {
    //       contacts.map(contact => (
    //         <Contact
    //         key={contact.id}
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this,contact.id)}/>
    //       ))
    //     }
    //   </React.Fragment>
    // );
  }
}
export default Contacts;
