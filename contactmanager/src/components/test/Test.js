import React, { Component } from 'react';

class Test extends Component {

  state = {
    sravan:"",
    title : "",
    body : ""
  }
  /*--this is where initally called to call any API data as soon as component is loaded--*/
  componentDidMount(){
    console.log("componentDiDMoount....1");
    // this.setState({sravan:'sravan now componentDidUpdate will excute'})

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data =>
      this.setState({
      title : data.title,
      body : data.body
    })
   );
  }

  /*--this is called before   componentDidMount but all API calls should be in componentDidMount only--*/
  // componentWillMount(){
  //   console.log("componentWillMount....2");
  // }

  /*---this will execute after componentDidMount and if state is updated----*/
  // componentDidUpdate(){
  //   console.log("componentDidUpdate....1-2");
  // }

  // componentWillUpdate(){
  //   console.log("componentWillUpdate....1--2-3");
  // }

  /*-----------------------NOTE------------------------------------------------*/
  /*---basically used in redux, when component receives new properties & u can update piece of props to state in this----*/
  /*---componentWillMount, componentWillUpdate,componentWillReceiveProps are deprecated--  */
  /*--to use deprecated method use UNSAFE_componentWillReceiveProps(....) in React.17 like this----*/
  // componentWillReceiveProps(nextProps,nextState){
  //   console.log("componentWillReceiveProps....");
  // }

  /*---use static keyword for below method and with return statement mandatory whether we want to update or not---*/
  // static getDerivedStateStateFromProps(nextProps, nextState){
  //   return null
  // }

  render() {
    const{title,body } = this.state;
    console.log("render....");
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
