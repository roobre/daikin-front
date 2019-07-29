import React, {Component} from 'react'
import {Button} from "semantic-ui-react";
import PropTypes from "prop-types";

class ToggleButtonGroup extends Component {
    state = {
        current: null
    };

    set(value) {
        this.setState({current: value});
        this.props.onChange(value);
    }

    render() {
        const {onChange, options, current, ...other} = this.props;

        let buttons = [];
        for (const opt in options) {
            const {value, ...other} = options[opt];

            // Allow to check against prop if supplied (exrternal state)
            let cur;
            if (current !== undefined) {
                cur = current;
            } else {
                // Use internal state otherwise
                cur = this.state.current
            }

            buttons.push(
                <Button key={value} primary={cur === value} onClick={() => this.set(value)} {...other} />
            )
        }

        return (
            <Button.Group {...other}>
                {buttons}
            </Button.Group>
        )
    }
}

ToggleButtonGroup.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
    current: PropTypes.any,
};

export {ToggleButton, ToggleButtonGroup};
export default ToggleButton;