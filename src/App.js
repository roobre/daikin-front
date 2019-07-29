import React, {Component} from 'react'
import './App.css'
import Remote from "./Remote";
import {Container, Grid, Label, Menu} from "semantic-ui-react";

class App extends Component {
    constructor(props) {
        super(props);

        // TODO: LocalStorage
        this.remotes = [
            {
                name: 'Salón',
                path: 'livingroom'
            },
            {
                name: 'Dormitorio',
                path: 'bedroom'
            }
        ];

        this.state = {
            currentRemote: this.remotes[0]
        }
    }

    render() {
        let remoteMenuItems = [];
        let remotes = [];

        this.remotes.forEach(remote => {
            remoteMenuItems.push(
                <Menu.Item key={remote.name + '|' + remote.path}
                           active={this.state.currentRemote === remote}
                           onClick={() => this.setState({currentRemote: remote})}>
                    {remote.name}
                </Menu.Item>
            );

            remotes.push(
                <div style={this.state.currentRemote !== remote ? {display: 'none'} : null} key={remote.name}>
                    <Remote path={remote.path}/>
                </div>
            )
        });

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
                    {remoteMenuItems}
                </Menu>
                {remotes}
            </Container>
        );
    }
}


export default App;
