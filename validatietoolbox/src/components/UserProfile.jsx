import {Component} from 'react';
import { connect } from 'react-redux';
import { objectActions } from '../redux/store';
import Button from '@material-ui/core/Button';
require ('./UserProfile.css');

class UserProfile extends Component {
    render() { 
        let content = null;

        if (!this.props.user){
            content = <Button variant="contained" color="primary" id="login" onClick = {() => {
                this.props.setViewMode('login');
                this.props.togglePanel();
            }}>Inloggen</Button>
        } else {
            content = <div><div id="username">Welkom {this.props.user.email}</div><Button variant="contained" color="primary" id="logout" onClick = {() => {
                this.logout();
            }}>Uitloggen</Button></div>
        }

        return (  <div id="userprofile">{content}</div> );
    }

    
    logout() {
        window.firebase.auth().signOut().then(() => {
            console.log("user successfully logged out.")
            this.props.setUser(null);
        }).catch((error) => {
            console.log("an error occurred when loggin out")
            // An error happened.
        });
    }


}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setViewMode: (viewMode) => dispatch(objectActions.setViewMode(viewMode)),
        togglePanel: () => dispatch(objectActions.togglePanel()),
        setUser: (user) => dispatch(objectActions.setUser(user))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
