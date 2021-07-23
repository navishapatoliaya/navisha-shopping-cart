import { Component } from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
const GoogleMapsAPI = 'AIzaSyB5F64Qxoz3mboEFZMKAxUibt4gB1aRM-E';
Geocode.setApiKey( GoogleMapsAPI );
Geocode.enableDebug();
class Contact extends Component{
    constructor( props ){
        super( props );
        this.state = {
            name:'',
            email:'',
            address: '',
            city: '',
            area: '',
            state: '',
            mapPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            },
            markerPosition: {
                lat: this.props.center.lat,
                lng: this.props.center.lng
            }
        }
    }
    componentDidMount() {
        Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
            response => {
                const address = response.results[0].formatted_address,
                      addressArray =  response.results[0].address_components,
                      city = this.getCity( addressArray ),
                      area = this.getArea( addressArray ),
                      state = this.getState( addressArray );
                console.log( 'city', city, area, state );
                this.setState( {
                    address: ( address ) ? address : '',
                    area: ( area ) ? area : '',
                    city: ( city ) ? city : '',
                    state: ( state ) ? state : '',
                } )
            },
            error => {
                console.error( error );
            }
        );
    }
    componentDidMount() {
        Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
            response => {
                const address = response.results[0].formatted_address,
                      addressArray =  response.results[0].address_components,
                      city = this.getCity( addressArray ),
                      area = this.getArea( addressArray ),
                      state = this.getState( addressArray );
                console.log( 'city', city, area, state );
                this.setState( {
                    address: ( address ) ? address : '',
                    area: ( area ) ? area : '',
                    city: ( city ) ? city : '',
                    state: ( state ) ? state : '',
                } )
            },
            error => {
                console.error( error );
            }
        );
    }
    shouldComponentUpdate( nextProps, nextState ){
        if (
            this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ) {
            return true
        } else if ( this.props.center.lat === nextProps.center.lat ){
            return false
        }
    }
    shouldComponentUpdate( nextProps, nextState ){
        if (
            this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ) {
            return true
        } else if ( this.props.center.lat === nextProps.center.lat ){
            return false
        }
    }

getCity = ( addressArray ) => {
        let city = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
                city = addressArray[ i ].long_name;
                return city;
            }
        }
    };
    getArea = ( addressArray ) => {
        let area = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if ( addressArray[ i ].types[0]  ) {
                for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
                    if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
                        area = addressArray[ i ].long_name;
                        return area;
                    }
                }
            }
        }
    };
    getState = ( addressArray ) => {
        let state = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            for( let i = 0; i < addressArray.length; i++ ) {
                if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
                    state = addressArray[ i ].long_name;
                    return state;
                }
            }
        }
    };
    onChange = ( event ) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    onInfoWindowClose = ( event ) => {
    };
    onMarkerDragEnd = ( event ) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();
        Geocode.fromLatLng( newLat , newLng ).then(
            response => {
                const address = response.results[0].formatted_address,
                      addressArray =  response.results[0].address_components,
                      city = this.getCity( addressArray ),
                      area = this.getArea( addressArray ),
                      state = this.getState( addressArray );
                this.setState( {
                    address: ( address ) ? address : '',
                    area: ( area ) ? area : '',
                    city: ( city ) ? city : '',
                    state: ( state ) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                } )
            },
            error => {
                console.error(error);
            }
        );
    };
    onPlaceSelected = ( place ) => {
        console.log( 'plc', place );
        const address = place.formatted_address,
              addressArray =  place.address_components,
              city = this.getCity( addressArray ),
              area = this.getArea( addressArray ),
              state = this.getState( addressArray ),
              latValue = place.geometry.location.lat(),
              lngValue = place.geometry.location.lng();
        // Set these values in the state.
        this.setState({
            address: ( address ) ? address : '',
            area: ( area ) ? area : '',
            city: ( city ) ? city : '',
            state: ( state ) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };
    render(){
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <GoogleMap google={ this.props.google }
                               defaultZoom={ this.props.zoom }
                               defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                    >
                        {/* InfoWindow on top of marker */}
                        <InfoWindow
                            onClose={this.onInfoWindowClose}
                            position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
                        >
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
                            </div>
                        </InfoWindow>
                        {/*Marker*/}
                        <Marker google={this.props.google}
                                name={'Dolores park'}
                                draggable={true}
                                onDragEnd={ this.onMarkerDragEnd }
                                position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                        />
                        <Marker />
                        {/* For Auto complete Search Box */}
                        <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '500px'
                            }}
                            onPlaceSelected={ this.onPlaceSelected }
                            types={['(regions)']}
                        />
                    </GoogleMap>
                )
            )
        );


let map;
        if( this.props.center.lat !== undefined ) {
            map = <div>
                   <div className="App" >
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
                    </form>
                </div>
                    <AsyncMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&libraries=places`}
                        loadingElement={
                            <div style={{ height: `100%` }} />
                        }
                        containerElement={
                            <div style={{ height: this.props.height }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                    />
            </div>
            } else {
                map = <div style={{height: this.props.height}} />
            }
        return(map);
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
}
export default Contact;
