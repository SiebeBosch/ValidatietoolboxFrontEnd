import {Component} from 'react';
import Register from './Register';
import Button from '@material-ui/core/Button';
import { Input, TextField } from '@material-ui/core';

class Login extends Component {
    state = {email:"", password:"",error:""}
    render() {
        let r = "";
        let title = "login";
        if (this.state.registering ) {
            title = "Registreren"
            r = <Register></Register>
        } else {
            r = <div className="column">
            <TextField  id="email" name="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} label="email" variant="outlined" />
            <TextField  id="password" name="password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} label="password" variant="outlined" />
            
            <Button variant="contained" color="primary" id="login" onClick = {() => {
                this.login()
            }}>Inloggen</Button><span>{this.state.error}</span>

            <Button variant="contained" color="primary" id="register" name="register" onClick = {() => {
                this.register()
            }}>Registreren</Button>
            </div>
        }
        return ( 
            <div className="page"><h1>{title}</h1>
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
        console.log('user successfully logged in ', userCredential);
        var user = userCredential.user;
        // ...
        })
    .catch((error) => {
        this.setState({error: "geen geldige inlog gevonden"});
        // var errorCode = error.code;
        // var errorMessage = error.message;
      });
    }


}
 
export default Login;

