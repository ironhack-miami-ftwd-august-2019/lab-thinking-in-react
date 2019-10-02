import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data.json'

export default class App extends Component {

  state = {
    data         : data ,
    filteredData : data ,
    checked      : false
  }

  showData = () => {
    return this.state.filteredData.map((eachThing, i)=>{

      if(!eachThing.stocked && this.state.checked){ //Not in stock and box is checked - so dont show this.
        return //nothing
      }
      
      let style = { color: 'blue' }

      if(!eachThing.stocked){ //If not in stock
          style = { color: 'red'} 
      }
      return (
        <tr key={i} style={style}>
          <td>{eachThing.category}</td>
          <td>{eachThing.price}</td>
          <td>{eachThing.name}</td>
        </tr>
      )
    })
  }

  search = (e) => {
    let filteredData = this.state.data.filter((eachCat)=>{ //Filter the original data by value of input 
      return  ( 
        eachCat.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
        eachCat.category.toLowerCase().includes(e.target.value.toLowerCase()) 
        )
    })
    this.setState({
      filteredData//:filteredData
    })
  }

  checkBoxThingy = (e) => {
    this.setState({
      checked:e.target.checked
    })

  }

  render() {
    console.log(data)

    return (
      <div className="App">
        <input type="text" placeholder="Search" onChange={this.search} />
        <input type="checkbox" onChange={this.checkBoxThingy}/>
        <table>
          <tbody>
            {this.showData()}
          </tbody>
        </table>
      </div>
    );
  }
}
