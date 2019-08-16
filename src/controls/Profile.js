import React, {Component} from 'react'
import {Button, Dropdown, Grid, Modal} from 'semantic-ui-react'
import Input from "semantic-ui-react/dist/commonjs/elements/Input";

class Profile extends Component {
    static profilesKey = 'acProfiles';
    static defaultProfiles = {
        prof1: {
            key: "prof1", text: "Powerful", value: "prof1", ac: {
                mode: "cool",
                fanSpeed: 4,
                temp: 23
            }
        },
        prof2: {
            key: "prof2", text: "Night", value: "prof2", ac: {
                mode: "cool",
                fanSpeed: -1,
                temp: 28
            }
        }
    };

    state = {
        profiles: {}
    };

    componentDidMount() {
        this.loadProfiles()
    }

    pushProfile(prof) {
        if (this.state.profiles[prof] == null) {
            console.error("Unknown profile '" + prof + "'");
            return
        }

        this.props.pushState(this.state.profiles[prof].ac)
    }

    loadProfiles() {
        const profilesStr = localStorage.getItem(Profile.profilesKey);
        if (profilesStr == null) {
            localStorage.setItem(Profile.profilesKey, JSON.stringify(Profile.defaultProfiles));
            this.setState({profiles: Profile.defaultProfiles});
            return;
        }

        this.setState({profiles: JSON.parse(profilesStr)})
    }

    saveProfile(key, name) {
        this.setState((state) => {
            state.profiles[key] = {
                key: key, text: name, value: key, ac: this.props.acState
            };
            localStorage.setItem(Profile.profilesKey, JSON.stringify(state.profiles));
            return state;
        });
    }

    deleteProfile(key) {
        this.setState((state) => {
            delete state.profiles[key];
            localStorage.setItem(Profile.profilesKey, JSON.stringify(state));
            return state
        })
    }

    render() {
        let profiles = [];
        for (const p in this.state.profiles) {
            const prof = this.state.profiles[p];
            profiles.push(
                <Grid.Column width={16} key={prof.key}>
                    <Input type='text' value={prof.text} action fluid>
                        <input/>
                        <Button icon='download' primary onClick={() => this.saveProfile(prof.key, prof.text)}/>
                        <Button icon='trash' negative onClick={() => this.deleteProfile(prof.key)}/>
                    </Input>
                </Grid.Column>
            )
        }

        return (
            <Grid.Row>
                <Grid.Column width={13}>
                    <Dropdown placeholder='Select profile...' fluid selection
                              onChange={(ev, {value}) => this.pushProfile(value)}
                              options={Object.values(this.state.profiles)}/>
                </Grid.Column>
                <Grid.Column width={3} stretched>
                    <Modal closeIcon='close' trigger={<Button icon='pencil' fluid/>}>
                        <Modal.Header>Edit profiles</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Grid>
                                    {profiles}
                                    <Grid.Column width={16}>
                                        <ProfileInput
                                            onAdd={name => this.saveProfile(name.replace(' ', '').toLowerCase(), name)}/>
                                    </Grid.Column>
                                </Grid>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

class ProfileInput extends Component {
    state = {
        name: ''
    };

    render() {
        return (
            <Input type='text' placeholder='Create new profile' value={this.state.name} action fluid
                   onChange={(ev, {value}) => this.setState({name: value})}>
                <input/>
                <Button icon='add' primary
                        onClick={() => this.props.onAdd(this.state.name)}/>
            </Input>
        )
    }
}

export default Profile;
