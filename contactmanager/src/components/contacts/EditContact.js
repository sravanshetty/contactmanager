import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from "uuid";
import axios from 'axios';


class EditContact extends Component {

  state = {
    name : '',
    email : '',
    phone : '',
    errors : {}
  }

  async componentDidMount(){
    const {id } = this.props.match.params;

    var res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const contact = res.data;
    this.setState({
      name : contact.name,
      email : contact.email,
      phone : contact.phone
    });

  }

  onChange = e => this.setState({[e.target.name]:e.target.value});

  onSubmit = async (dispatch, e) =>{
    e.preventDefault();
    // console.log(this.state);
    const {name, email, phone} = this.state;

    /*--check for errors start---*/
    if(name === ''){
      this.setState({errors : {name : 'Name is required'}});
      return;
    }
    if(email === ''){
      this.setState({errors : {email : 'Email is required'}});
      return;
    }
    if(phone === ''){
      this.setState({errors : {phone : 'Phone is required'}});
      return;
    }
    /*--check for errors end---*/

    const updateContact = {
      name : name ,// name:name
      email : email,
      phone : phone
    }

    const {id} = this.props.match.params;
    console.log("updated : "+JSON.stringify(id));
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact);
    console.log("updated : "+JSON.stringify(updateContact));

    dispatch({type: 'UPDATE_CONTACT',payload:res.data});



    //clear state
    this.setState({
      name : '',
      email : '',
      phone : '',
      errors : {}
    })

    this.props.history.push('/');

  }
/*---as we are setting values to input by state so called CONTROLLED_COMPONENTS--*/
render(){
  const {name, email, phone, errors} = this.state;
  return(
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div className="card mb-3">
                  <div className="card-header">Edit Contact</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this,dispatch)}>

                      <TextInputGroup
                        label="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                        error ={errors.name}
                      />

                      <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.onChange}
                        error ={errors.email}
                      />

                      <TextInputGroup
                        label="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}
                        error ={errors.phone}
                      />



                      <input type="submit" value="Update Contact" className="btn btn-light btn-block"/>
                    </form>
                  </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
export default EditContact;
