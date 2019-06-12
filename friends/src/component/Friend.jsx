import React from 'react'
import './Friend.css'

export default function(props){
    return(
        <section className="friend">
            <h3>{props.friend.name}</h3>
            <ul>
                <li className="none">Age: {props.friend.age}</li>
                <li className="none">Email: {props.friend.email}</li>
            </ul>
        </section>
    )
}