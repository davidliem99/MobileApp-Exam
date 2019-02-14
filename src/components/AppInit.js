import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth'
import Main from './Main';
import {alreadyLogin,notLoginYet} from '../actions'
import {connect} from 'react-redux'
class AppInit extends Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAj9SOE4RVcQn396k7xNh4iTRpuSnpT5lk",
      authDomain: "mobile-exam-d01050.firebaseapp.com",
      databaseURL: "https://mobile-exam-d01050.firebaseio.com",
      projectId: "mobile-exam-d01050",
      storageBucket: "mobile-exam-d01050.appspot.com",
      messagingSenderId: "219643766113"
    };
  if(firebase.apps.length===0){
    firebase.initializeApp(config);
  }
  
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          this.props.alreadyLogin(user)
      }else{
          this.props.notLoginYet();
      }
  })
  }

  render() {
    return (
          <Main />
    );
  }
}
export default connect(null, {alreadyLogin,notLoginYet}) (AppInit);