import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return(
    <List/>
  );
}
let Tasks = [
  { 
    id: 1,
    content: "buy groceries",
    completed: false
  }, 
  { 
    id: 2,
    content: "drink some tea",
    completed: true
  }, 
  { 
    id: 3,
    content: "finish this app",
    completed: false
  }, 
  { 
    id: 4,
    content: "make dinner",
    completed: false
  },
  { 
    id: 5,
    content: "make dinner now",
    completed: false
  }
]

class List extends React.Component{
  
  state = {
    tasks: Tasks
  }

  render(){
    return (
      <ul>
        {this.state.tasks.map( (task) => (
          <Task key={task.id} id= {task.id} content={task.content} completed={task.completed} toggleCheck= {this.toggleCheck}/>
        ))}
      </ul>

    )
  }

  toggleCheck = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task)=>{
        if (task.id === id ){
          return { ...task, completed: !task.completed }
        } else {
          return task
        }
      })
    })
  }

  

  // Also works:
  // constructor(){
  //   this.state = {
  //     tasks: Tasks
  //   }
  // }



}

class Task extends React.Component {

    checkClicked = () => {
      this.props.toggleCheck(this.props.id)
    }

    render(){
      return <li><input type='checkbox' checked={this.props.completed} onChange={this.checkClicked}
      />{this.props.content}</li>
    }
}


export default App;
