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
    static backend = 'http://localhost:3001';
    static statePath = 'state';
    static capabilitiesPath = 'capabilities';

    componentDidMount() {
        fetch(Remote.backend + '/' + this.props.path + '/' + Remote.capabilitiesPath)
            .then(response => response.json())
            .then(json => this.setState({capabilities: json}))
            .catch(e => {
                this.setState({error: e});
                console.warn(e);
            });

        this.pollState()
    }

    pollState() {
        fetch(Remote.backend + '/' + this.props.path + '/' + Remote.statePath)
            .then(response => response.json())
            .then(json => this.setState({ac: json}))
            .then(() => {
                if (this.state.error == null) {
                    setTimeout(this.pollState.bind(this), 800)
                }
            })
            .catch(e => {
                this.setState({error: e});
                console.warn(e);
            });
    }

    state = {
        ac: null,
        error: null
    };

    pushState(acState) {
        fetch(Remote.backend + '/' + this.props.path + '/' + Remote.statePath, {
            method: 'PUT',
            body: JSON.stringify(Object.assign(this.state.ac, acState)),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(e => {
            this.setState({error: e});
            console.warn(e);
        });

    }

    render() {
        let controls;
        if (this.state.ac != null && this.state.capabilities != null) {
            controls = (
                <Grid>
                    <Mode modeCapabilities={this.state.capabilities.modes}
                          currentMode={this.state.ac.mode}
                          setMode={mode => this.pushState({mode: mode})}/>
                    <FanSpeed currentSpeed={this.state.ac.fanSpeed}
                              setSpeed={speed => this.pushState({fanSpeed: speed})}/>
                    <Temperature currentTemp={this.state.ac.temp}
                                 setTemp={temp => this.pushState({temp: temp})}/>
                    <Swing swingCapabilities={this.state.capabilities.swing}
                           swingV={this.state.ac.swing.vertical} swingH={this.state.ac.swing.horizontal}
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
