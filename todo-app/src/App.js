import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Take Out The Trash',
          completed: false
        },
        {
          id: 2,
          title: 'Looking For New Job',
          completed: false
        },
        {
          id: 3,
          title: 'Learnning',
          completed: false
        },
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
