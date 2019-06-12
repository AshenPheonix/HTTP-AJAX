import React from 'react';
import './App.css';
import FriendList from './component/FriendList'
import axios from 'axios'
import FriendForm from './component/FriendForm'

class App extends React.Component{
  state={
    friends:[],
    editing:false,
    name:'',
    email:'',
    age:''
  }

  componentDidMount(){
    this.R();
  }

  C=friend=>{
    axios.post('http://localhost:5000/friends',friend).then(data=>{
      this.setState({friends:data.data,name:'',email:'',age:''})
    })
  }

  R=()=>{
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

  U=friend=>{
    friend.id=this.state.editing
    axios.put(`http://localhost:5000/friends/${friend.id}`,friend).then(data=>{
      this.setState({friends:data.data,name:'',email:'',age:'',editing:false})
    })
  }

  D=id=>{
    axios.delete(`http://localhost:5000/friends/${id}`).then(data=>{
      this.setState({friends:data.data,name:'',email:'',age:''})
    }).catch(err=>{
      console.error('errored ::', err);
    })
  }

  clear=e=>{
    this.setState({editing:null, name:'',email:'',age:''})
  }

  update=who=>{
    this.setState({
      ...who,
      editing:who.id
    })
    
  }

  formChange=e=>{
    this.setState({[e.target.name]:e.target.value})
    
  }

  render(){
    return (
      <div className="App">
        <FriendForm c={this.C} editing={this.state.editing} 
                    U={this.U} clear={this.clear} 
                    name={this.state.name} email={this.state.email}
                    age={this.state.age} formChange={this.formChange}
        />
        <FriendList friends={this.state.friends} kill={this.D} update={this.update}/>
      </div>
    );
  }
}

export default App;
