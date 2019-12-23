import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout'
import Listitem from './Listitem';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'


library.add(faTrash);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
      items:filteredItems
      })
  }
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key===key){
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{borderRadius:'20px',padding:'10px'}}>
          <h1 className="App-title">My To-Do List</h1>
          <h1 className="App-content">Keep your Task ready!!</h1>
          <form className="App-form" id="to-do-form" style={{borderRadius:'20px',padding:'10px'}} onSubmit={this.addItem}>
            <ui>
            <li style={{margin:'10px 10px 10px 10px'}}>
            <input style={{borderRadius:'20px',padding:'10px'}} id="task-name" type="text" placeholder="Enter Task Name"
            value={this.state.currentItem.text}
            onChange={this.handleInput}/>
            </li>
            <li style={{margin:'10px 10px 10px 10px'}}>
            <input id="task-desc" style={{borderRadius:'20px',padding:'10px'}} type="text" placeholder="Enter Description"/>
            </li>
            <li style={{margin:'10px 10px 10px 10px'}}>
            <input id="task-due" style={{borderRadius:'20px',padding:'10px'}} type="date" placeholder="Due Date"/>
            </li>
            <button id="add-task" style={{borderRadius:'18px',padding:'10px', width: '150px', height: '35px', background: '#fb4544'}} type="submit">ADD</button>
            </ui>
          </form>
          <Listitem items = {this.state.items}
          deleteItem = {this.deleteItem}
          setUpdate ={this.setUpdate}
          ></Listitem>
        </header>
        <p className="App-intro">

        </p>
        <Layout />
      </div>
    );
  }
}
export default App;
