import React, {Component} from 'react'
import {Container, Grid, Button, Icon, Label, Input} from 'semantic-ui-react'
import './controls/Mode'
import './App.css'
import Mode from "./controls/Mode";
import FanSpeed from "./controls/FanSpeed";
import Temperature from './controls/Temperature';
import Swing from "./controls/Swing";


class App extends Component {
    state = {
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
    };

    pushState(acState) {
        console.log('Send to backend placeholder');
        this.setState((oldState) => {
            oldState.ac = Object.assign(oldState.ac, acState)
            return oldState
        });
    }

    render() {
        return (
            <Container style={{marginTop: '1em'}}>
                <Grid>
                    <Grid.Column width={13} textAlign='left'>
                        <Label size='large'>AC Remote 2: Electric Boogaloo</Label>
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right'>
                        <Label size='large' color='green' icon={{name: 'signal', fitted: true}}/>
                    </Grid.Column>

                    <Mode currentMode={this.state.ac.mode} setMode={(mode) => this.pushState({mode: mode})}/>

                    <FanSpeed currentSpeed={this.state.ac.fanSpeed}
                              setSpeed={(speed) => this.pushState({fanSpeed: speed})}/>

                    <Temperature currentTemp={this.state.ac.temp} setTemp={(temp) => this.pushState({temp: temp})}/>

                    <Swing swingV={this.state.ac.swing.vertical} swingH={this.state.ac.swing.horizontal}
                           setSwing={(v, h) => this.pushState({swing: {vertical: v, horizontal: h}})}/>

                    <Grid.Column width={16} stretched>
                        <Button color={this.state.ac.powered ? 'red' : 'green'} icon='power'
                                onClick={() => this.pushState({powered: !this.state.ac.powered})}/>
                    </Grid.Column>

                </Grid>
            </Container>
        );
    }
}


export default App;
