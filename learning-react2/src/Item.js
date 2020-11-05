import React from 'react' 

class Item extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        item: ''
      }
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const data = this.state
      console.log(data)
    }

    handleInputChange = (event) => {
      event.preventDefault()
      console.log(event.target.value)
      this.setState({item : event.target.value})
    }

    render () {

      return (
        <div>
          <h1>Input list item</h1>
          <form onSubmit={this.handleSubmit}>
            <p><input type='text' placeholder='item' name='listItem' onChange={this.handleInputChange} /></p>
            <p><button>Add Item</button></p>
          </form>
        </div>
      )
    }
  }





export default Item;