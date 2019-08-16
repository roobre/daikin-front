import React, {Component} from 'react'
import {Button, Dropdown, Grid, Modal} from 'semantic-ui-react'

class Profile extends Component {
    changeProfile(ev, {value}) {
        console.log(value);
    }

    render() {
        return (
            <Grid.Row>
                <Grid.Column width={13}>
                    <Dropdown placeholder='Select profile...' fluid selection
                              onChange={this.changeProfile}
                              options={[
                                  {key: "prof1", text: "Powerful", value: "prof1"},
                                  {key: "prof2", text: "Silent", value: "prof2"}
                              ]}/>
                </Grid.Column>
                <Grid.Column width={3} stretched>
                    <Modal trigger={<Button icon='pencil' fluid/>}>

                    </Modal>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default Profile;
