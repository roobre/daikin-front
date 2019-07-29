import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Button, Grid, Input, Label} from "semantic-ui-react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

class Temperature extends Component {
    changeTemp(delta) {
        this.props.setTemp(this.props.currentTemp + delta)
    }

    onInputChange(ev) {
        const val = ev.target.value;
        if (val.length !== 0) {
            this.props.setTemp(parseInt(val, 10))
        } else {
            this.props.setTemp(0)
        }
    }

    render() {
        return (
            <Grid.Column width={16} stretched>
                <Input size='big' type='number' labelPosition='right'>
                    <Label><Icon name='thermometer' fitted/></Label>
                    <input type='number' value={this.props.currentTemp} onChange={(ev) => this.onInputChange(ev)}/>
                    <Button.Group size='big'>
                        <Button icon='plus' onClick={() => this.changeTemp(1)}/>
                        <Button icon='minus'  onClick={() => this.changeTemp(-1)}/>
                    </Button.Group>
                </Input>
            </Grid.Column>
        )
    }
}

Temperature.propTypes = {
    currentTemp: PropTypes.number,
    setTemp: PropTypes.func
};

export default Temperature;
