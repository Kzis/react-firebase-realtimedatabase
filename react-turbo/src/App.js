// App.js

import React, { Component } from 'react';
import MessageList from '../src/components/MessageList';
import MessageBox from '../src/components/MessageBox';
import Header from '../src/components/Header';

import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyAUzbCA07tw-U0rGXkvm0q5jyQ8PF6Z_u0",
      authDomain: "react-turbo-94b01.firebaseapp.com",
      databaseURL: "https://react-turbo-94b01.firebaseio.com",
      projectId: "react-turbo-94b01",
      storageBucket: "react-turbo-94b01.appspot.com",
      messagingSenderId: "167029306316"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
          <Header title="Simple Firebase App" />
          <div className="columns">
              <div className="column is-3"></div> 
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
          </div>
          <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
          </div>
      </div>
    );
  }
}

export default App;