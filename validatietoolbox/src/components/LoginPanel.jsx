import {Component} from 'react';
import Register from './Register';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { objectActions } from '../redux/store';
import { Input, TextField } from '@material-ui/core';

require ('./LoginPanel.css');

class LoginPanel extends Component {
    state = {email:"", password:"",error:""}
    render() {
        let r = "";
        let title = "login";
        if (this.state.registering ) {
            title = "Registreren"
            r = <Register></Register>
        } else {
            r = <div className="column">
            <TextField  id="email" name="email" size="small" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} label="email" variant="outlined" />
            <TextField  id="password" name="password" size="small" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} label="password" variant="outlined" />
            
            <Button variant="contained" color="primary" size="small" id="login" onClick = {() => {
                this.login()
            }}>Inloggen</Button><span>{this.state.error}</span>

            <Button variant="contained" color="primary" size="small" id="register" name="register" onClick = {() => {
                this.register()
            }}>Registreren</Button>
            </div>
        }
        return ( 
            <div className="page"><h4>{title}</h4>
            {r}
            </div> );
    }

    register() {
        this.setState({registering:true})
    }

    login() {
        // let email = "siebe@hydroconsult.nl";
        // let password = "validatietoolbox";
        window.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
        // Signed in
        this.props.setViewMode('validatie');
        this.props.setUser(userCredential.user);
        console.log('user successfully logged in ', userCredential);
        var user = userCredential.user;
        // ...
        })
    .catch((error) => {
        this.setState({error: error.message});
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
    }


}
 

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setViewMode: (viewMode) => dispatch(objectActions.setViewMode(viewMode)),
        setUser: (user) => dispatch(objectActions.setUser(user)),
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);


