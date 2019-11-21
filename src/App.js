import React from 'react';
import Listitem from './components/Listitem';
import './App.css';

class Todo extends React.Component {
  
  state = {
    toDoItemArray: this.props.daList,
    newItem: ''
  }
  
  clearList(e) {
    console.log("Clearing list!")
    this.setState({
      toDoItemArray: []
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addItem = (e) => {
    // prevent the event from running the default "submit" event.
    e.preventDefault()
    let arrCopy = [...this.state.toDoItemArray];
    arrCopy.push(this.state.newItem);
    this.setState({
      toDoItemArray: arrCopy
    })
  }

  render(){

    let todoItems = this.state.toDoItemArray.map( (item, index) => (
      <Listitem doThis={item} key={index} />
    ))

    return (
    <>
      <h1>Things I should stop procrastinating:</h1>
      <ul>
        {todoItems}
      </ul>
      <form>
        <input name='newItem' type="text"
        placeholder="Type an item here"
        value={this.state.newItem}
        onChange={this.handleChange}
        />
        <button onClick={(e) => this.addItem(e)}>Add it!</button>
      </form>
      <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
    </>
    )
  }
}

export default Todo;
