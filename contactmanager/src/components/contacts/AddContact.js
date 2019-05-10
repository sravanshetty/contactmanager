import React, { Component } from 'react';
import {Consumer} from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from "uuid";
import axios from 'axios';


class AddContact extends Component {

  state = {
    name : '',
    email : '',
    phone : '',
    errors : {}
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

    const newcontact = {
      // id : uuid(),
      name,
      email,
      phone
      // errors : {}
    }


  var res = await  axios.post(`https://jsonplaceholder.typicode.com/users`,newcontact);
  dispatch({type:'ADD_CONTACT',payload : res.data});

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
                  <div className="card-header">Add Contact</div>
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



                      <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                  </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
export default AddContact;
