import React, { Component } from 'react'
import Friend from './Friend'

export default class FriendList extends Component {
    render() {
        if(this.props.friends.length>0)
            return (
                <div>
                    {this.props.friends.map(friend=>(
                        <Friend friend={friend} key={friend.id}/>
                    ))}
                </div>
            )
        else
            return <section>Loading</section>
    }
}
