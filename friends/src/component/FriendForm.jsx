import React, { Component } from 'react'
import './FriendForm.css'

export default class FriendForm extends Component {
    state={
        name:'',
        email:'',
        age:''
    }

    formChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })        
    }

    newFriend=e=>{
        e.preventDefault();
        let temp={
            ...this.state
        }
        if(this.state.name!=='' && this.state.email!==''&& this.state.age!==''){
            this.props.c(temp)
            this.setState({name:'',email:'',age:''})
        }
        
    }

    render() {
        return (
            <section className="new-friend">
                <h2>New Friend</h2>
                <form onSubmit={this.newFriend}>
                    <section className="inputs">
                        <label htmlFor="name">
                            Name: <input type="text" name="name" value={this.state.name} onChange={this.formChange} placeholder="Name"/>
                        </label>
                        <label htmlFor="email">
                            Email: <input type="email" name="email" value={this.state.email} onChange={this.formChange} placeholder="Email"/>
                        </label>
                        <label htmlFor="age">
                            Age: <input type="number" name="age" value={this.state.age} onChange={this.formChange} placeholder="Age"/>
                        </label>
                    </section>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}
