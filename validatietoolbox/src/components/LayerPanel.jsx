import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { objectActions } from '../redux/store';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Tooltip from '@material-ui/core/Tooltip';
import MapIcon from '@material-ui/icons/Map';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ViewListIcon from '@material-ui/icons/ViewList';
import UserProfile from './UserProfile';

require("./LayerPanel.css");

class LayerPanel extends Component {
    state = {}

    constructor() {
        super();
        this.checkedChanged = this.checkedChanged.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
    }

    checkedChanged(items) {
        this.state.setData(items);
    }

    close() {
        this.props.togglePanel()
    }


    render() {
        let panelStyle = this.props.panelIsOpen ? "" : "closed";
        let view;

        const handleChange = (event, viewMode) => {
            console.log('change detected:', viewMode);
            this.props.setViewMode(viewMode);
        };

        console.log("Panel open? is ", this.props.panelIsOpen);

        let panelContent = null;
        if (this.props.viewMode == 'kaart') { panelContent = <div style={{flex:2}}>kaartmodus</div> };
        if (this.props.viewMode == 'validatie') { panelContent = <div style={{flex:2}}>validatiemodus</div> };
        if (this.props.viewMode == 'tabel') { panelContent = <div style={{flex:2}}>tabelmodus</div> };
        console.log("props: ", this.props.viewMode);

        return (
            <div id="layerpanel" className={panelStyle}>                
                <div id="panelcontent">
                    <UserProfile></UserProfile>
                    {panelContent}
                </div>
                <div id="buttons">
                    <ToggleButtonGroup orientation="vertical" onChange={this.props.togglePanel}>
                        <Tooltip title={"Klap het lagenpaneel open."}>
                            <ToggleButton id="buttonopenclose" value="list" aria-label="list">
                                {this.props.panelIsOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                            </ToggleButton>
                        </Tooltip>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
                        <Tooltip title={"Configureer het validatieproces."}>
                            <ToggleButton className="buttonfeaturetype" value="validatie" selected={this.props.viewMode == 'validatie'} aria-label="module">
                                <PlaylistAddCheckIcon id="pathmarker" />
                            </ToggleButton>
                        </Tooltip>
                        <Tooltip title={"Resultaat op de kaart."}>
                            <ToggleButton className="buttonfeaturetype" value="kaart" selected={this.props.viewMode == 'kaart'}  aria-label="list">
                                <MapIcon id="locationmarker" />
                            </ToggleButton>
                        </Tooltip>
                        <Tooltip title={"Resultaat in tabelvorm."}>
                            <ToggleButton id="polygonmarkerbutton" value="tabel" selected={this.props.viewMode == 'tabel'} aria-label="quilt">
                                <ViewListIcon id="polygonmarker" />
                            </ToggleButton>
                        </Tooltip>
                    </ToggleButtonGroup>
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    return {
        panelIsOpen: state.panelOpen,
        viewMode: state.viewMode
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setData: (data) => dispatch(objectActions.setData(data)),
        setViewMode: (viewMode) => dispatch(objectActions.setViewMode(viewMode)),
        togglePanel: () => dispatch(objectActions.togglePanel())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LayerPanel);
