import React,{Component} from 'react';
import axios from 'axios';

/*----create method called createContext()----*/
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return{
        ...state,
        contacts: state.contacts.filter(
          contact =>contact.id !== action.payload
        )
      };
      case 'ADD_CONTACT':
        return{
          ...state,
          contacts: [action.payload, ...state.contacts]
        };
      case 'UPDATE_CONTACT':
        return {
          ...state,
          contacts : state.contacts.map(
            contact =>
              contact.id === action.payload.id
                ? (contact = action.payload)
                : contact
          )
        };
    default:
      return state;

  }
}

/*---here we will have global state in Provider-----*/
export class Provider extends Component{
  state = {
    // contacts : [
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
    //   ],
    contacts:[],
      dispatch: action =>{
        this.setState(state => reducer(state,action))
      }
  }


async  componentDidMount(){
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(res => this.setState({contacts:res.data}))
    var res = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.setState({contacts:res.data});
  }


  /*---Assiging value to Provide Context.Provide----*/
render(){
  return(
    <Context.Provider value={this.state}>
      {this.props.children}
    </Context.Provider>
  );
}
}

/*---as above is providing values : through this Consumer another components can acces values----*/
export const Consumer = Context.Consumer;
