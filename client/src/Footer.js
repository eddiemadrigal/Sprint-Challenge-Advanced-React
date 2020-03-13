import React from "react";
import { useStyles } from './hooks/useFooterStyle';

export default function Hooks() {
    const classes = useStyles();
    return (
        <div>
            <p className={ classes.footerStyle }>Copyright 2020. All Rights Reserved.</p>
        </div>
    )
}