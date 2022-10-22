import React, {useState} from "react";
import classes from "./comment-block.module.css";

const CommentBlock = ({text}) => <div className={classes.comment}>{text}</div>

export default CommentBlock