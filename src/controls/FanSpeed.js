import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Grid} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFan} from "@fortawesome/free-solid-svg-icons";
import {ToggleButtonGroup} from "./ToggleButton";

const sleepSpeed = -1;
const autoSpeed = -2;

const maxSpeed = 4;

class FanSpeed extends Component {
    render() {
        let speedScale = [];
        for (let i = 0; i <= maxSpeed; i++) {
            speedScale.push({
                value: i,
                content: <FontAwesomeIcon icon={faFan} style={{fontSize: 1 + 0.2 * (i - (maxSpeed / 2)) + 'em'}}/>,
            })
        }
        return (
            <Grid.Column width={16} stretched>
                <ToggleButtonGroup onChange={this.props.setSpeed} current={this.props.currentSpeed}
                                   options={speedScale}/>
                <ToggleButtonGroup size='large' onChange={this.props.setSpeed} current={this.props.currentSpeed}
                                   options={[
                                       {value: sleepSpeed, icon: 'moon'},
                                       {value: autoSpeed, content: 'Auto'}
                                   ]}/>
            </Grid.Column>
        )
    }
}

FanSpeed.propTypes = {
    currentSpeed: PropTypes.number,
    setSpeed: PropTypes.func
};


export default FanSpeed;
