import React, { Component } from 'react'
import Friend from './Friend'

export default class FriendList extends Component {
    state={
        friends:[]
    }
    

    render() {
        return (
            <div>
                <ul>
                    {this.state.friends.map(friend=>(
                        <Friend friend={friend}/>
                    ))}
                </ul>
            </div>
        )
    }
}
