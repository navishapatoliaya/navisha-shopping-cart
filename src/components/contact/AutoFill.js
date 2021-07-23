import { Component } from "react";
import Geocode from "react-geocode";

class AutoFill extends Component{
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
    

}
export default AutoFill;