import React from "react";
import {Button} from "semantic-ui-react";

function ToggleButton(props) {
    const {own, current, setter, children, ...other} = props;
    return (
        <Button primary={current === own} onClick={() => setter(own)} {...other}>{children}</Button>
    )
}

export default ToggleButton;