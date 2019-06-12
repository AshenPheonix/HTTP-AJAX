import React from 'react'

export default function(props){
    return(
        <section className="friend">
            <h3>{props.name}</h3>
            <ul>
                <li className="none">Age: {props.age}</li>
                <li className="none">Email: {props.email}</li>
            </ul>
        </section>
    )
}