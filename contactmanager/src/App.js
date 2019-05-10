import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/header';
import {Provider} from './context';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/about';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

/*----
  BrowserRouter : Parent component strore all of component Routes
  Switch : To show particular component
---*/

class App extends React.Component {
  render() {

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager"/>
              <div className="container">

                <Switch>
                  <Route exact path="/" component={Contacts}/>
                  <Route exact path="/contact/AddContact" component={AddContact}/>

                  <Route exact path="/contact/edit/:id" component={EditContact}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/test" component={Test}/>
                  <Route  component={NotFound}/>
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
