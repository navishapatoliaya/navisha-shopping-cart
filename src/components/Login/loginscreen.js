import { Component } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

class loginscreen extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginscreen:'',
            loginmessage:'',
            buttonLabel:'Register',
            isLogin:true

        }
    }
    componentWillMount(){
        let loginscreen=[];
        loginscreen.push(<LoginForm parentContext={this} 
                                    appContext={this.props.parentContext}/>)
        let loginmessage="Not registered yet, Register Now"
        this.setState({
                        loginscreen:loginscreen,
                        loginmessage:loginmessage
        })
    }
    handleClick(event){
        // console.log("event",event);
        let loginmessage;
        if(this.state.isLogin){
        let loginscreen=[];
          loginscreen.push(<RegistrationForm parentContext={this}/>);
          loginmessage = "Already registered.Go to Login";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Login",
                         isLogin:false
                       })
        }
        else{
        let loginscreen=[];
          loginscreen.push(<LoginForm parentContext={this}/>);
          loginmessage = "Not Registered yet.Go to registration";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Register",
                         isLogin:true
                       })
        }
      }
    render(){
        return(
            <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
         
            <div>
               <button label={this.state.buttonLabel} 
                            primary={true} 
                            onClick={(event) => this.handleClick(event)}/>
           </div>
     
        </div>
      </div>
        );
    }
}
export default loginscreen;