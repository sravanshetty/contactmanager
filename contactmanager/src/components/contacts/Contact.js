import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Consumer} from '../../context';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class Contact extends Component {
  state = {};

  constructor(){
    super();
    this.state = {
      showContactInfo : false
    };
    // this.onShowClick = this.onShowClick.bind(this);//use when using normal functions
  }

  // static propTypes =  {
  //   name : PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone : PropTypes.string.isRequired
  // };

  onShowClick  = () => {
    this.setState({showContactInfo:!this.state.showContactInfo});
  }

  onDeleteClick = async (id ,dispatch) => {
      /*-----accessing through state star-------*/
      // this.props.deleteClickHandler();
      /*-----accessing through state end-------*/
      console.log("onDeleteClick");
      // dispatch({type:'DELETE_CONTACT', payload:id})
      try{
      var res = await  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type:'DELETE_CONTACT', payload:id});
      }catch(e){
        dispatch({type:'DELETE_CONTACT', payload:id});
      }

  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value =>{
          const {dispatch}= value;

          return(
            <div className="card card-body mb-3">
              <h4>
                {name}<i
                  onClick={this.onShowClick.bind(this)}
                  className="fas fa-sort-down"
                  style={{cursor:'pointer'}} />

                  <i
                    className="fas fa-trash"
                    style={{cursor:'pointer',float:'right', color:'red'}}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>

                    <Link to={`contact/edit/${id}`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{cursor:'pointer',float:'right', color:'black',marginRight:'20px'}}></i>
                    </Link>

              </h4>
              {
                showContactInfo
                ?
                (<ul className="list-group">
                    <li className="list-group-item">Email : {email}</li>
                    <li className="list-group-item">Phone : {phone}</li>
                  </ul>  )
                : null
              }
            </div>
          )
        }}
      </Consumer>

    );
  }
}

// Contact.propTypes = {
//   name : PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone : PropTypes.string.isRequired
// };

Contact.propTypes = {
  contact : PropTypes.object.isRequired,
  // deleteClickHandler : PropTypes.func.isRequired
}

export default Contact;
