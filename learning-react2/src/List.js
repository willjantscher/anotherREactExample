import React from 'react'
import Item from './Item'

function List(props) {
  let eachItem = props.toDoList.map(each => (
    <li>
      {each.item}
      {/* need to have () => because we are passing in something, we are making it an anonymous function */}
      <button type="button" onClick={() => props.onDelete(each.item)}>Delete</button>
    </li>
  ))
  return (
    <ul>
      {eachItem}
    </ul>
  )
}


export default List;