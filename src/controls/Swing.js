import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Button, Grid, Icon} from "semantic-ui-react";

class Swing extends Component {
    render() {
        let swingV, swingH = null;
        if (this.props.swingCapabilities.vertical) {
            swingV = (
                <Grid.Column stretched>
                    <Button primary={this.props.swingV} onClick={() => this.props.setSwing(!this.props.swingV, this.props.swingH)}
                            size='large' icon={<Icon name='resize vertical' size='large'/>}/>
                </Grid.Column>
            )
        }
        if (this.props.swingCapabilities.horizontal) {
            swingH = (
                <Grid.Column stretched>
                    <Button primary={this.props.swingH} onClick={() => this.props.setSwing(this.props.swingV, !this.props.swingH)}
                            size='large' icon={<Icon name='resize horizontal' size='large'/>}/>
                </Grid.Column>
            )
        }
        return (
            <Grid.Row columns='equal'>
                {swingV}
                {swingH}
            </Grid.Row>
        )
    }
}

Swing.propTypes = {
    swingV: PropTypes.bool,
    swingH: PropTypes.bool,
    setSwing: PropTypes.func,
    swingCapabilities: PropTypes.objectOf(PropTypes.bool)
};

export default Swing;
