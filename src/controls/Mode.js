import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Button, Grid} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFan, faTintSlash} from "@fortawesome/free-solid-svg-icons";
import './ToggleButton'
import ToggleButton from "./ToggleButton";

const fanMode = 'fan';
const coolMode = 'cool';
const drierMode = 'dry';
const heatMode = 'heat';

class Mode extends Component {
    render() {
        return (
            <Grid.Column width={16} stretched>
                <Button.Group size='large'>
                    <ToggleButton setter={this.props.setMode} own={heatMode} current={this.props.currentMode}
                                  icon='fire'/>
                    <ToggleButton setter={this.props.setMode} own={fanMode} current={this.props.currentMode}>
                        <FontAwesomeIcon icon={faFan}/>
                    </ToggleButton>
                    <ToggleButton setter={this.props.setMode} own={coolMode} current={this.props.currentMode}
                                  icon='snowflake outline'/>
                    <ToggleButton setter={this.props.setMode} own={drierMode} current={this.props.currentMode}>
                        <FontAwesomeIcon icon={faTintSlash}/>
                    </ToggleButton>
                </Button.Group>
            </Grid.Column>
        )
    }
}

Mode.propTypes = {
    currentMode: PropTypes.string,
    setMode: PropTypes.func
};


export default Mode;
