import React from "react";
import { useStyles } from './hooks/useStyles';

export default function Hooks() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={ classes.fontStyling }>Players</h1>
        </div>
    )
}