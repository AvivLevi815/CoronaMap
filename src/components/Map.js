// import React from 'react';
// import ReactDOM from 'react-dom';

// const mapStyles = {
//   map: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%'
//   }
// };

// export class CurrentLocation extends React.Component {
//     constructor(props) {
//         super(props);
    
//         const { lat, lng } = this.props.initialCenter;
    
//         this.state = {
//           currentLocation: {
//             lat: lat,
//             lng: lng
//           }
//         }
//     }

//     loadMap() {
//         if (this.props && this.props.google) {
//           // checks if google is available
//           const { google } = this.props;
//           const maps = google.maps;
    
//           const mapRef = this.refs.map;
    
//           // reference to the actual DOM element
//           const node = ReactDOM.findDOMNode(mapRef);
    
//           let { zoom } = this.props;
//           const { lat, lng } = this.state.currentLocation;
//           const center = new maps.LatLng(lat, lng);
    
//           const mapConfig = Object.assign(
//             {},
//             {
//               center: center,
//               zoom: zoom
//             }
//           );
    
//           // maps.Map() is constructor that instantiates the map
//           this.map = new maps.Map(node, mapConfig);
//         }
//       }


//     componentDidMount() {
//         if (this.props.centerAroundCurrentLocation) {
//           if (navigator && navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(pos => {
//               const coords = pos.coords;
//               this.setState({
//                 currentLocation: {
//                   lat: coords.latitude,
//                   lng: coords.longitude
//                 }
//               });
//             });
//           }
//         }
//         this.loadMap();
//       }

//     recenterMap() {
//         const map = this.map;
//         const current = this.state.currentLocation;
//         const google = this.props.google;
//         const maps = google.maps;
    
//         if (map) {
//          center = new maps.LatLng(current.lat, current.lng);
//           map.panTo(center);
//         }
//       }
//         componentDidUpdate(prevProps, prevState) {
//             if (prevProps.google !== this.props.google) {
//               this.loadMap();
//             }
//             if (prevState.currentLocation !== this.state.currentLocation) {
//               this.recenterMap();
//             }
//           }
        


// }


// CurrentLocation.defaultProps = {
//     zoom: 14,
//     initialCenter: {
//       lat: -1.2884,
//       lng: 36.8233
//     },
//     centerAroundCurrentLocation: false,
//     visible: true
//   };
// export default CurrentLocation;