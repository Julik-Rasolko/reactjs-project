import React, {useState} from "react";
import classes from "./card.module.css"

export default function Card({title, text, likes}) {
    const [counter, setCounter] = useState(likes)
    const [is_liked, setLiked] = useState(false)
    const [smile, setSmile] = useState("👍")

    const like = () => {
        if(is_liked) {
            setCounter(oldCounter => oldCounter - 1)
            setLiked(false)
            setSmile("👍")
        }
        else {
            setCounter(oldCounter => oldCounter + 1)
            setLiked(true)
            setSmile("👎")
        }
    }

    const buttonColor = is_liked? "red" : "green"

    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            <div className={classes.text}>{text}</div>
            <div className={classes.likes}>Likes: {counter}</div> 
            <div className={classes.button} onClick={like} style={{backgroundColor: buttonColor}}>{smile}</div>
        </div>
    )
}