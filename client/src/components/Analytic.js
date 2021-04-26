import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../actions';
import { fetchOnlineCount } from '../actions';
import { fetchOfflineCount } from '../actions';
import Chart from './Chart';

class Analytic extends Component {
    componentDidMount() {
        this.props.fetchCategory();
        this.props.fetchOfflineCount();
        this.props.fetchOnlineCount();
    }

    render() {
        return (
            <div >
                <Chart {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { deviceCategory: state.deviceInfo.devicesCategory, deviceOfflineCount: state.deviceInfo.offlineCount, deviceOnlineCount: state.deviceInfo.onlineCount }
}
export default connect(mapStateToProps, { fetchCategory, fetchOfflineCount, fetchOnlineCount })(Analytic);
