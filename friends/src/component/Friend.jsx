import React from 'react'
import './Friend.css'

export default function(props){
    return(
        <section className="friend">
            <span className="kill" onClick={()=>props.kill(props.friend.id)}>x</span>
            <h3>{props.friend.name}</h3>
            <section className="friend-data">
                <ul>
                    <li className="none">Age: {props.friend.age}</li>
                    <li className="none">Email: {props.friend.email}</li>
                </ul>
                <button onClick={props.U}>Update Friend</button>
            </section>
        </section>
    )
}