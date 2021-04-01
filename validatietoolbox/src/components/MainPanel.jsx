import {Component} from 'react';
import ValidationPanel from './ValidationPanel';
import { connect } from 'react-redux';
import { objectActions } from '../redux/store';
import MapPanel from './MapPanel';
import LoginPanel from './LoginPanel';
import TablePanel from './TablePanel';

require ('./MainPanel.css');

class MainPanel extends Component {
    state = {  }
    render() { 
        let content = null;
        if (this.props.viewMode == 'kaart') {
            content = <MapPanel></MapPanel>
        } else if (this.props.viewMode == "validatie") {
            content = <ValidationPanel></ValidationPanel>
        } else if (this.props.viewMode == "tabel") {
            content = <TablePanel></TablePanel>
        } else if (this.props.viewMode == "login") {
            content = <LoginPanel></LoginPanel>
        }
        return (
           <div id="mainpanel">{content}</div> 
        )
    }
}


function mapStateToProps(state) {
    return {
        viewMode: state.viewMode
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
