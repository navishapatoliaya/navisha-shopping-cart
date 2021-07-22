import { Component } from "react";
import { Loginscreen } from '../components/common';

class RegistrationContainer extends Component{
    constructor(props){
        super(props);
            this.state={
                loginPage:[],
                uploadScreen:[]
            }
        
    }
    componentWillMount(){
        var loginPage =[];
        loginPage.push(<Loginscreen parentContext={this}/>);
        this.setState({
                      loginPage:loginPage
                        })
      }
      render() {
        return (
          <div className="App">
            {this.state.loginPage}
            {this.state.uploadScreen}
          </div>
        );
      }
}
export default RegistrationContainer;