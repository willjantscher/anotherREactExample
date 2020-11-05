//cd learning-react2/src
//npm start

// As a user, I want to be able to see a list of todo items under a heading “To Do List” on my main screen.
// As a user, I want to be able to add todo items to my todo list so I can update it as new things come up. 
// As a user, I want to be able to delete an item from my list if I no longer need to do it so that I don’t accidentally do extra work.

// As a user, I want to be able to update a specific to do item on the list in case I had a spelling error or something! 
// As a user, I want to be able to indicate which day this todo item is DUE on.

// As a user, I want to be able to check a particular day of the week and see what todo items are due that day. 

// As a user, when I have completed all of my tasks, I want the screen to read “No todos!” So I know I have nothing left to do.




import './App.css';
import React from 'react'
import List from './List'
import Form from './Form'
import Checker from './dateChecker'

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
        {item: 'Wash the car', dueDate: "2020-12-11", dayOfWeek: "Wednesday"},
        {item: 'Do the dishes', dueDate: "2020-12-12", dayOfWeek: "Wednesday"},
        {item: 'Make the bed', dueDate: "2020-12-13", dayOfWeek: "Wednesday"}
      ],
      itemInput: '',
      inputDate: '',
      checkDate: '',
      returnedList: [],
      dayOfWeek: 'Monday',
      toDo: ''
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
  handleDateInput= (event) => {
    event.preventDefault()
    this.setState({inputDate: event.target.value})
    //every time this is triggered, the value is sent to the itemInput state
  }

  handleCheckDate= (event) => {
    event.preventDefault()
    this.setState({checkDate: event.target.value})
  }
  handleSearchDate = () => {
    let output = this.state.toDoList.filter(thing => thing.dueDate === this.state.checkDate)
    console.log(output)
    this.setState({returnedList: this.state.toDoList.filter(thing => thing.dueDate === this.state.checkDate)})
    //every time this is triggered, the value is sent to the itemInput state
  }


  handleItemInputChange = (event) => {
    event.preventDefault()
    this.setState({itemInput: event.target.value})
    //every time this is triggered, the value is sent to the itemInput state
  }
  handleAdd(event) {
    event.preventDefault()
    this.setState({toDoList: this.state.toDoList.concat({'item': this.state.itemInput, 'dueDate': this.state.inputDate, dayOfWeek: this.state.dayOfWeek})})
    // use concate because we do not want to directly add into element of state, want to replace the element of state
  }

  handleDelete = (item) => {
    let newState = this.state.toDoList
    //filter out the item that matches the one we want to delete
    newState = newState.filter(toDoItem => toDoItem.item !== item)
    this.setState({toDoList: newState})
  }
  //for updating items
  handleUpdate = (item) => {
    let newState = this.state.toDoList
    newState = newState.map(toDoItem => {
      if(toDoItem.item === item) {
          return toDoItem.item = this.state.itemInput;
        }
      this.setState({toDoList: newState})
      }
      )
  }

  handleDayChange = (event) => {
    event.preventDefault()
    this.setState({dayOfWeek: event.target.value})
  }


  render () {
    if (this.state.toDoList.length === 0 && this.state.toDo === '') {
      this.setState({toDo: 'No To Dos!'})}
      else if (this.state.toDoList.length !== 0 && this.state.toDo === 'No To Dos!') {
        this.setState({toDo: ''})
      }

    return (
      <div className="App">
        <header className="App-header">
        <h1>To Do List</h1>

        {this.state.toDo}


        {/* <div>
          <h1>Input list item</h1>
          <form onSubmit={this.handleSubmit}>
            <p><input type='text' placeholder='item' name='listItem' onChange={this.handleInputChange} /></p>
            <p><button>Add Item</button></p>
          </form>
        </div> */}

        <List 
          toDoList={this.state.toDoList} 
          onDelete={this.handleDelete} 
          onUpdate ={this.handleItemInputChange}
          onItemUpdate={this.handleUpdate}
        />
        <br></br>
        Add to my List
        {/* need to bind this. bind connects this function to this environment (in this case it is bound to app.js location)  */}
        {/* if you make the functions arrow functions, you don't need to bind them (handleinputChange = (event) => {}*/}
        {/* item and on are how this is usually done */}
        <Form 
          onItemInputChange={this.handleItemInputChange.bind(this)} 
          onAdd={this.handleAdd.bind(this)}
          onDate={this.handleDateInput}
          onSelect={this.handleDayChange}
          />
        {/* we are passing in these methods, they are inthe props now */}
        <br></br>
        <br></br>
        What am I doing on ...?
        <Checker 
          checkDate ={this.handleCheckDate}
          searchDate={this.handleSearchDate}
          resultList={this.state.returnedList}
        />
        </header>
      </div>
    )
  }
}



export default App;






