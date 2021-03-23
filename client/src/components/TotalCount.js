import { Typography } from '@material-ui/core';
import React, {Component} from 'react';
import {connect} from 'react-redux';


class TotalCount extends Component {

     render(){
        console.log(this.props);
         return (
             <div>
                <Typography variant="h5">Total Connected Devices</Typography>
                <Typography variant="h3" align ="center" color="secondary">{this.props.deviceCount.deviceOfflineCount + this.props.deviceCount.deviceOnlineCount }</Typography>
            </div>
         );
     }
}

function mapStateToProps(state){
    return {deviceCount: state}
}


export default connect(mapStateToProps)(TotalCount);