import React, {Component} from 'react'
import './App.css'
import Remote from "./Remote";
import {Container, Grid, Label, Menu} from "semantic-ui-react";

class App extends Component {
    constructor(props) {
        super(props);

        this.remotes = {
            livingroom: <Remote path='livingRoom'/>,
            dorm: <Remote path='dorm'/>
        };

        this.state = {
            currentRemote: this.remotes.livingroom
        }
    }

    render() {
        let remotes = [];

        // TODO: React does not keep unrendered components in memory, so I use this ugly hack. It must be a better way to do this
        for (let remote in this.remotes) {
            remotes.push(
                <div style={this.state.currentRemote !== this.remotes[remote] ? {display: 'none'} : null} key={remote}>
                    {this.remotes[remote]}
                </div>
            )
        }

        return (
            <Container style={{marginTop: '1em'}}>
                <Grid>
                    <Grid.Column width={13} textAlign='left'>
                        <Label size='large'>AC Remote 2: Electric Boogaloo</Label>
                    </Grid.Column>
                    <Grid.Column width={3} textAlign='right'>
                        <Label size='large' color={true ? 'green' : 'red'}
                               icon={{name: 'signal', fitted: true}}/>
                    </Grid.Column>
                </Grid>
                <Menu pointing secondary>
                    <Menu.Item
                        active={this.state.currentRemote === this.remotes.livingroom}
                        onClick={() => this.setState({currentRemote: this.remotes.livingroom})}>
                        Salón
                    </Menu.Item>
                    <Menu.Item
                        active={this.state.currentRemote === this.remotes.dorm}
                        onClick={() => this.setState({currentRemote: this.remotes.dorm})}>
                        Dormitorio
                    </Menu.Item>
                </Menu>
                {remotes}
            </Container>
        );
    }
}


export default App;
