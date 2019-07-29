import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Grid} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFan, faTintSlash} from "@fortawesome/free-solid-svg-icons";
import './ToggleButton'
import {ToggleButtonGroup} from "./ToggleButton";

const fanMode = 'fan';
const coolMode = 'cool';
const drierMode = 'dry';
const heatMode = 'heat';

class Mode extends Component {
    btnOpts = [
        {
            value: heatMode,
            icon: 'fire'
        },
        {
            value: drierMode,
            content: <FontAwesomeIcon icon={faTintSlash}/>
        },
        {
            value: fanMode,
            content: <FontAwesomeIcon icon={faFan}/>
        },
        {
            value: coolMode,
            icon: 'snowflake'
        },
    ];

    render() {
        return (
            <Grid.Column width={16} stretched>
                <ToggleButtonGroup size='large' options={this.btnOpts}
                                   current={this.props.currentMode}
                                   onChange={this.props.setMode}/>
            </Grid.Column>
        )
    }
}

Mode.propTypes = {
    currentMode: PropTypes.string,
    setMode: PropTypes.func
};

export default Mode;
