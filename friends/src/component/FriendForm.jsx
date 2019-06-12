import React, { Component } from 'react'
import './FriendForm.css'

export default class FriendForm extends Component {
    newFriend=e=>{
        e.preventDefault();
        let temp={
            name:this.props.name,
            email:this.props.email,
            age:this.props.age
        }
        if(this.props.name!=='' && this.props.email!==''&& this.props.age!==''){
            if(this.props.editing)
                this.props.U(temp)
            else
                this.props.c(temp)
            
        }
    }

    clear=e=>{
        e.preventDefault()
        this.props.clear();
    }

    render() {
        return (
            <section className="new-friend">
                <h2>New Friend</h2>
                <form onSubmit={this.newFriend}>
                    <section className="inputs">
                        <label htmlFor="name">
                            Name: <input type="text" name="name" value={this.props.name} onChange={this.props.formChange} placeholder="Name"/>
                        </label>
                        <label htmlFor="email">
                            Email: <input type="email" name="email" value={this.props.email} onChange={this.props.formChange} placeholder="Email"/>
                        </label>
                        <label htmlFor="age">
                            Age: <input type="number" name="age" value={this.props.age} onChange={this.props.formChange} placeholder="Age"/>
                        </label>
                    </section>
                    <button type="submit">Submit</button>
                    {this.props.editing&&
                        <button onClick={this.clear}>
                            Clear/Stop Editing
                        </button>
                    }
                </form>
            </section>
        )
    }
}
