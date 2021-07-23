import { Component } from "react";
import Map from "./Map"
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            address: '',
            city: '',
            area: '',
            state: '',
        }
    }
    render(){
        return(
            <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.onNameChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onEmailChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="street_address">Street Address</label>
                            <textarea className="form-control"
                                placeholder="Enter Street address"
                                value={this.state.street_address}
                                onChange={this.onChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="area">Area</label>
                            <textarea className="form-control"
                                placeholder="Enter area"
                                value={this.state.area}
                                onChange={this.onChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <textarea className="form-control"
                                placeholder="Enter City"
                                value={this.state.city}
                                onChange={this.onChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <textarea className="form-control"
                                placeholder="Enter State"
                                value={this.state.state}
                                onChange={this.onChange}></textarea>
                        </div>
                        <div>
                            <Map />
                        </div>
                    </form>
        )
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onChange = ( event ) => {
        this.setState({ [event.target.name]: event.target.value });
    };
}
export default Contact;