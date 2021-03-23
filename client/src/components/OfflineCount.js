import { Typography } from '@material-ui/core';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchOnlineCount} from '../actions';
import {fetchOfflineCount} from '../actions';

class OfflineCount extends Component {
     componentDidMount(){
        this.props.fetchOfflineCount();
     }
     
     render(){
        console.log(this.props);
         return (
             <div>
                <Typography variant="h5">Total Offline Devices</Typography>
                <Typography variant="h3" align ="center" color="error">{this.props.deviceCount.deviceOfflineCount}</Typography>
                
            </div>
         );
     }
}

function mapStateToProps(state){
    return {deviceCount: state}
}


export default connect(mapStateToProps, {fetchOnlineCount,fetchOfflineCount})(OfflineCount);