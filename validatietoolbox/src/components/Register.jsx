import {Component} from 'react';
import Login from './Login';
import Button from '@material-ui/core/Button';
import { Input, TextField } from '@material-ui/core';

class Register extends Component {
    state = {email:"", password:""  }
    render() { 
        return (
            <div className="column">
            <TextField  id="registration_email" name="registration_email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} label="email" variant="outlined" />
            <TextField  id="registration_password" name="registration_password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} label="password" variant="outlined" />
            {/* <input id="registration_email" name="registration_email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} label="email" variant="outlined"></input>
            <input id="registration_password" name="registration_password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}></input> */}
            <Button variant="contained" color="primary"  id="register" onClick = {() => {
                this.register()
            }}>Registreren</Button><span>{this.state.error}</span></div>


            
            
            
            // <div><button id="register" name="register"></button></div> 
            );
    }

    register(){
        window.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
        // Signed in 
        console.log("user credential is ", userCredential);
        var user = userCredential.user;
        // ...
        })
        .catch((error) => {
            console.log("error while registering: ", error);
            var errorCode = error.code;
            var errorMessage = error.message;
        // ..
        });
    }



}
 
export default Register;