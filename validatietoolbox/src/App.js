import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import LayerPanel from './components/LayerPanel';
import MainPanel from './components/MainPanel';

require ('./App.css');

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

  
  render() { 
    let content=
      <div id="mainContent">
        <LayerPanel/>
        <MainPanel/>
      </div>      
    
    
    // <div>Welkom <Logout></Logout></div>
    


    // if (!this.state.user) {
    //   content=<Login></Login>
    // }
    return (
      <div className="App">
        {content}
      </div>
    );
    }
}
 
export default App;
