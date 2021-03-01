import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import Login from './components/Login';
import Logout from './components/Logout';

class App extends Component {
  state = {  }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged((user) => {
      console.log("firebase authentication fired", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
      this.setState({user:user});
    });
  }

  
  logout() {
    window.firebase.auth().signOut().then(() => {
        console.log("user successfully logged out.")
        // Sign-out successful.
      }).catch((error) => {
        console.log("an error occurred when loggin out")
        // An error happened.
      });
  }

  render() { 
    let content=<div>Welkom <Logout></Logout></div>
    if (!this.state.user) {
      content=<Login></Login>
    }
    return (
      <div className="App">
        {content}
      </div>
    );
    }
}
 
export default App;
