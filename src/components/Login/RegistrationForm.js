import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { LoginForm } from "../Login";
class RegistrationForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            confirmpassword:''
        };
    }
    handleClick(event){
        event.preventDefault()
        const apiBaseUrl="https://reqres.in/api";
        console.log("values",this.state.email,this.state.password,this.state.confirmpassword)
        let self=this;
        let payload={
            "email":this.state.email,
            "password":this.state.password,
           
        }
        axios.post(apiBaseUrl+'/register',payload)
        
        .then(function(response){
            console.log(payload);
            console.log(response);

            if(response.data.code === 200){
                let loginscreen=[];
                loginscreen.push(<LoginForm parrentContext={this}/>)
                let loginmessage="Not Registered yet.Go to registration";
                self.props.parrentContext.setState({loginscreen:loginscreen,
                                                    loginmessage:loginmessage,
                                                    buttonLabel:"Register",
                                                    isLogin:true});
            }
        })
        .catch(function(error){
            console.log(error);
        });
    
    }
    render(){
        return(
            <form>
                <h3>Sign Up</h3>

                
                <div className="form-group">
                    <label>Email address</label>
                    <input  type="email" 
                            className="form-control" 
                            placeholder="Enter email" 
                            onChange = {(event) => this.setState({email: event.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input  type="password" 
                            className="form-control" 
                            placeholder="Enter password" 
                            onChange = {(event) => this.setState({password:event.target.value})}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input  type="password" 
                            className="form-control" 
                            placeholder="Enter password" 
                            onChange = {(event) => this.setState({confirmpassword:event.target.value})}/>
                </div>
                
                <div className="form-group">
                <button type="submit" 
                        className="btn btn-primary btn-block"
                        onClick={(event) => this.handleClick(event)}>Sign Up</button>
                </div>
                <div className="form-group">
                    <p className="forgot-password text-right">
                        Already registered <Link to="login">sign in?</Link>
                    </p>
                </div>
            </form> 
            
        )
    }
}


export default RegistrationForm;