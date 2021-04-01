import React, { Component, useState } from 'react';

require ('./TablePanel.css');

class TablePanel extends Component {
    state = {  }
    render() { 
        let content = null;
        content = "Resultaat in tabelvorm"
        return (<div id="tablepanel">{content}</div> );
    }
}
 

export default (TablePanel);
