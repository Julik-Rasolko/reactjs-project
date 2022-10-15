import React, {useState} from "react";
import CommentBlock from "./comment-block/commentBlock";
import classes from "./commentStuff.module.css";

export default function CommentStuff({comments, toSeeComments}) {
    const [arr, setArr] = useState(comments)
    const [line, setLine] = useState('')

    const onChange = event => {
        const { value } = event.target
        setLine(value)
    }

    const pushLine = () => {
        setArr([...arr, line])
    }

    if (!toSeeComments) {
        return (<div className={classes.commCounter}>Comments: {arr.length}</div>)
    }
    return (
        <>
            <div>Comments: {arr.length}</div>
            <div className={classes.comments}>
                <div>
                    {arr.map(it => <CommentBlock text={it}/>)}
                </div>
                <input
                    className={classes.custom}
                    value={line}
                    onChange={onChange}
                    placeholder={"Enter something..."}
                />
                <button onClick={pushLine}>
                    Publish
                </button>
            </div>
        </>
    )
}