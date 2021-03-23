import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDevice} from '../actions';
import TableInfo from './TableInfo';
import NewTable from './newtable';

class DeviceInfo extends Component {
     componentDidMount(){
         this.props.fetchDevice();    
     }

     render(){
         console.log(this.props)
         return (
             <div>
                {/* <TableInfo {...this.props}/> */}
                <TableInfo {...this.props}/>
             </div>
         );
     }
}

function mapStateToProps(state){
    return { deviceInfo: state.deviceInfo}
}
export default connect(mapStateToProps, {fetchDevice})(DeviceInfo);