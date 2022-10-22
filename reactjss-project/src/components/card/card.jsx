import React, {useState} from "react";
import classes from "./card.module.css"
import CommentStuff from "./comment-stuff/comment-stuff";

export default function Card({title, text, likes, comments}) {
    const [counter, setCounter] = useState(likes)
    const [isLiked, setLiked] = useState(false)
    const [toSeeComments, setToSeeComments] = useState(false)

    const like = () => {
        if(isLiked) {
            setCounter(oldCounter => oldCounter - 1)
            setLiked(false)
        }
        else {
            setCounter(oldCounter => oldCounter + 1)
            setLiked(true)
        }
    }

    const ifSeeComments = () => {
        setToSeeComments(oldVal => !oldVal)
    }

    const buttonColor = isLiked? "red" : "green"
    const smile = isLiked? "👎" : "👍"
    const commentsText = toSeeComments? "Hide comments" : "See comments"

    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            <div className={classes.text}>{text}</div>
            <div className={classes.likes}>Likes: {counter}</div> 
            <div className={classes.button} 
                onClick={like} 
                style={{backgroundColor: buttonColor}}
            >{smile}</div>
            <CommentStuff comments={comments}
                        toSeeComments={toSeeComments}/>
            <div className={classes.commButton}
                onClick={ifSeeComments}
            >{commentsText}</div>
        </div>
    )
}