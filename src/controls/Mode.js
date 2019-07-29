import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Grid} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFan, faTintSlash} from "@fortawesome/free-solid-svg-icons";
import './ToggleButtonGroup'
import {ToggleButtonGroup} from "./ToggleButtonGroup";

const fanMode = 'fan';
const coolMode = 'cool';
const drierMode = 'dry';
const heatMode = 'heat';

class Mode extends Component {
    btnOpts = [
        {
            value: heatMode,
            icon: 'sun'
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
        let opts = this.btnOpts;
        if (this.props.modeCapabilities != null) {
            opts = this.btnOpts.filter(opt => this.props.modeCapabilities.indexOf(opt.value) >= 0);
        }

        return (
            <Grid.Column width={16} stretched>
                <ToggleButtonGroup size='large' options={opts}
                                   current={this.props.currentMode}
                                   onChange={this.props.setMode}/>
            </Grid.Column>
        )
    }
}

Mode.propTypes = {
    currentMode: PropTypes.string,
    setMode: PropTypes.func,
    modeCapabilities: PropTypes.arrayOf(PropTypes.string)
};

export default Mode;
