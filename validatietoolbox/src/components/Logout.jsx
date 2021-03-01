import {Component} from 'react';
import Button from '@material-ui/core/Button';

class Logout extends Component {
    state = {  }
    render() { 
        return ( <div><Button variant="contained" color="primary" id="logout" onClick = {() => {
            this.logout()
        }}>Uitloggen</Button></div> );
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


}
 
export default Logout;