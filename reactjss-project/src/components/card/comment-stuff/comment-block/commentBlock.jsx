import React, {useState} from "react";
import classes from "./commentBlock.module.css"

export default function CommentBlock({text}) {
    return (
        <div className={classes.comment}>{text}</div>
    )
}