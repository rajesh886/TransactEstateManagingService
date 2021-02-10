import React, {Component} from 'react';
import DeviceInfo from './DeviceInfo';

class Dashboard extends Component {
    render(){
        return(
            <div>
               <h1>Dashboard</h1>
               <DeviceInfo />
            </div>
        );
    }
}

export default Dashboard;