import React from 'react';
import './App.css';
import FriendList from './component/FriendList'
import axios from 'axios'
import FriendForm from './component/FriendForm'

class App extends React.Component{
  state={
    friends:[]
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends').then((data)=>{
      if(data.status===200){
        this.setState({
          friends:data.data
        })
      }
    }).catch(err=>{
      console.error('errored ::', err);
    })
  }

  C=friend=>{
    axios.post('http://localhost:5000/friends',friend).then(data=>{
      this.setState({friends:data.data})
    })
  }

  render(){
    return (
      <div className="App">
        <FriendList friends={this.state.friends}/>
        <FriendForm c={this.C}/>
      </div>
    );
  }
}

export default App;
