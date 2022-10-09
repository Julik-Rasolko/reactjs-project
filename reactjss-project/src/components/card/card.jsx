import React, {useState} from "react";
import classes from "./card.module.css"

export default function Card({title, text, likes}) {
    const [counter, setCounter] = useState(likes)
    const [isLiked, setLiked] = useState(false)

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

    const buttonColor = isLiked? "red" : "green"
    const smile = isLiked? "👎" : "👍"

    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            <div className={classes.text}>{text}</div>
            <div className={classes.likes}>Likes: {counter}</div> 
            <div className={classes.button} 
                onClick={like} 
                style={{backgroundColor: buttonColor}}
            >{smile}</div>
        </div>
    )
}