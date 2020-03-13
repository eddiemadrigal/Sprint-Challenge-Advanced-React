import React from "react";
import { useStyles } from './hooks/useStyles';

export default function Hooks() {
    const classes = {useStyles}
    return (
        <div>
            <p className={ classes.fontStyling }>hello world</p>
        </div>
    )
}