//cd learning-react2/src
//npm start

// As a user, I want to be able to see a list of todo items under a heading “To Do List” on my main screen.
// As a user, I want to be able to add todo items to my todo list so I can update it as new things come up. 
// As a user, I want to be able to delete an item from my list if I no longer need to do it so that I don’t accidentally do extra work.

// As a user, I want to be able to update a specific to do item on the list in case I had a spelling error or something! 
// As a user, I want to be able to indicate which day this todo item is DUE on.


import './App.css';
import React from 'react'
import List from './List'
import Form from './Form'


// document.title="To-Do List"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>To Do List</h1>
//         <Item />
//         <List />
//       </header>
//     </div>
//   );
// }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: [
        {item: 'wash the car'},
        {item: 'do the dishes'},
        {item: 'make the bed'}
      ],
      itemInput: ''
    }
    // this.tempItem = ''
  }


  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   const data = this.tempItem;
  //   //console.log(`this is my data ${data}`)
  //   this.setState(
  //     state => {
  //       const toDoList = state.toDoList.concat({'item': data});
  //       return {
  //         toDoList,
  //       };
  //     }
  //   )
  // }

  // handleInputChange = (event) => {
  //   event.preventDefault()
  //   // console.log(event.target.value)
  //   this.tempItem = event.target.value;
  // }


  handleItemInputChange(event) {
    event.preventDefault()
    this.setState({itemInput: event.target.value})
    //every time this is triggered, the value is sent to the itemInput state
  }
  handleAdd(event) {
    event.preventDefault()
    this.setState({toDoList: this.state.toDoList.concat({'item': this.state.itemInput})})
    // use concate because we do not want to directly add into element of state, want to replace the element of state
  }

  handleDelete = (item) => {
    let newState = this.state.toDoList
    //filter out the item that matches the one we want to delete
    newState = newState.filter(toDoItem => toDoItem.item !== item)
    this.setState({toDoList: newState})
  }

  


  render () {
    return (
      <div className="App">
        <header className="App-header">
        <h1>To Do List</h1>

        {/* <div>
          <h1>Input list item</h1>
          <form onSubmit={this.handleSubmit}>
            <p><input type='text' placeholder='item' name='listItem' onChange={this.handleInputChange} /></p>
            <p><button>Add Item</button></p>
          </form>
        </div> */}

        <List toDoList={this.state.toDoList} onDelete={this.handleDelete}/>
        {/* need to bind this. bind connects this function to this environment (in this case it is bound to app.js location)  */}
        {/* if you make the functions arrow functions, you don't need to bind them (handleinputChange = (event) => {}*/}
        {/* item and on are how this is usually done */}
        <Form onItemInputChange={this.handleItemInputChange.bind(this)} onAdd={this.handleAdd.bind(this)}/>
        {/* we are passing in these methods, they are inthe props now */}
        </header>
      </div>
    )
  }
}



export default App;






