import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Button, Grid} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFan} from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "./ToggleButton";

const sleepSpeed = -1;
const autoSpeed = -2;

const maxSpeed = 4;

class FanSpeed extends Component {
    render() {
        let buttons = [];
        for (let i = 0; i <= maxSpeed; i++) {
            buttons.push(
                <ToggleButton setter={this.props.setSpeed} own={i} current={this.props.currentSpeed} key={i}>
                    <FontAwesomeIcon icon={faFan} style={{fontSize: 1 + 0.2 * (i - (maxSpeed / 2)) + 'em'}}/>
                </ToggleButton>
            )
        }
        return (
            <Grid.Column width={16} stretched>
                <Button.Group size='large'>
                    {buttons}
                </Button.Group>
                <Button.Group size='large'>
                    <ToggleButton setter={this.props.setSpeed} own={sleepSpeed} current={this.props.currentSpeed}
                                  icon='moon'/>
                    <ToggleButton setter={this.props.setSpeed} own={autoSpeed} current={this.props.currentSpeed}
                                  content='Auto'/>
                </Button.Group>
            </Grid.Column>
        )
    }
}

FanSpeed.propTypes = {
    currentSpeed: PropTypes.number,
    setSpeed: PropTypes.func
};


export default FanSpeed;
