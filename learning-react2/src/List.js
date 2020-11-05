import React from 'react'
import Item from './Item'

function List(props) {
  if(props.toDoList !== '')
  {
    let eachItem = props.toDoList.map(each => (
      <li>
        {each.item + ' on '}
        {each.dayOfWeek + ' '} 
        {each.dueDate + ' '}
        
  
  
        {/* Due date:
        <input type="date"></input> */}
  
        {/* need to have () => because we are passing in something, we are making it an anonymous function */}
        <button type="button" onClick={() => props.onDelete(each.item)}>Delete</button>
  
        <form>
          <input type="text" placeholder="enter changes" onChange={props.onUpdate}></input>
          <button type="button" onClick={() => props.onItemUpdate(each.item)}>Update</button>
        </form>
  
      </li>
    ))
    return (
      <ul>
        {eachItem}
      </ul>
    )
  }
}


export default List;