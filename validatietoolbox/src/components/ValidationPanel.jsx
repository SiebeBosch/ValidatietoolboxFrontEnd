import {Component} from 'react';
import { connect } from 'react-redux';
require ('./ValidationPanel.css');

class ValidationPanel extends Component {
    state = {  }
    render() { 
        return ( <div id="validatiepaneel" className={this.props.panelOpen? "hidden":""}>Dataset en Validatieregels</div> );
    }
}
 

function mapStateToProps(state) {
    return {
        panelOpen: state.panelOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ValidationPanel);

