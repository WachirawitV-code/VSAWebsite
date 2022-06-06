import React,{Component,useLayoutEffect, useState} from 'react';
import Input from './components/Input'
import List from './components/List'
import {v1 as uuid} from "uuid";
import Navbar from './components/Navbar/Navbar'

class App extends Component{
    state={
          items:[],
          id:uuid(),
          item:"",
          editItem:false
    };
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const newItem={
            id:this.state.id,
            name:this.state.item
        }
        const updateItems=[...this.state.items,newItem]
        this.setState({
              items:updateItems,
              item:"",
              id:uuid(),
              editItem:false
        })
    }
    handleChange=(e)=>{
        this.setState({
              item:e.target.value
        })
    }
    clearList=()=>{
          this.setState({
                items:[]
          })
    }
    handleDelete=(id)=>{
          const filterItems=this.state.items.filter(item=>item.id !== id)
          this.setState({
              items:filterItems
          })
    }
    handleEdit=(id)=>{
        const filterItems = this.state.items.filter(item=>item.id !== id)
        const selectItem = this.state.items.find(item=>item.id===id)
        // A
        // B
        this.setState({
            items:filterItems,
            item:selectItem.name,
            id:id,
            editItem:true
        })
    }
    render(){
      return (
        <div >
            <Navbar/>
              <h2 align="center">VSA WEB</h2>
              <div className="container">
                  <Input
                  item={this.state.item}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  editItem={this.state.editItem}
                  />
              </div>
              <div className="container">
                 <List 
                 items={this.state.items}
                 handleDelete={this.handleDelete}
                 handleEdit={this.handleEdit}
                 clearList={this.clearList}
                 />
              </div>
        </div>
      );
    }
}

export default App;
