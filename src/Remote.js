import React, {Component} from 'react'
import {Button, Grid, Segment} from 'semantic-ui-react'
import './controls/Mode'
import './App.css'
import Mode from "./controls/Mode";
import FanSpeed from "./controls/FanSpeed";
import Temperature from './controls/Temperature';
import Swing from "./controls/Swing";
import PropTypes from "prop-types";


class Remote extends Component {
    constructor(props) {
        super(props);

        setTimeout(() => {
            this.setState({
                ac: {
                    mode: 'cool',
                    fanSpeed: 2,
                    temp: 20,
                    swing: {
                        vertical: false,
                        horizontal: true,
                    },
                    powered: true
                }
            })
        }, 1000)
    }

    state = {
        ac: null
    };

    pushState(acState) {
        console.log('Send to backend/' + this.props.path);
        this.setState((oldState) => {
            oldState.ac = Object.assign(oldState.ac, acState);
            return oldState
        });
    }

    render() {
        let controls;
        if (this.state.ac != null) {
            controls = (
                <Grid>
                    <Mode currentMode={this.state.ac.mode}
                          setMode={(mode) => this.pushState({mode: mode})}/>
                    <FanSpeed currentSpeed={this.state.ac.fanSpeed}
                              setSpeed={(speed) => this.pushState({fanSpeed: speed})}/>
                    <Temperature currentTemp={this.state.ac.temp}
                                 setTemp={(temp) => this.pushState({temp: temp})}/>
                    <Swing swingV={this.state.ac.swing.vertical} swingH={this.state.ac.swing.horizontal}
                           setSwing={(v, h) => this.pushState({swing: {vertical: v, horizontal: h}})}/>
                    <Grid.Column key='power' width={16} stretched>
                        <Button color={this.state.ac.powered ? 'red' : 'green'} icon='power'
                                onClick={() => this.pushState({powered: !this.state.ac.powered})}/>
                    </Grid.Column>
                </Grid>
            )
        } else {
            controls = <Grid.Column width={16}><Segment placeholder loading/></Grid.Column>
        }

        return controls;
    }
}

Remote.propTypes = {
    path: PropTypes.string,
};

export default Remote;
