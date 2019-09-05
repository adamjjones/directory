import React, { Component } from 'react'
import Employees from './components/Employees'
import AddEmployee from './components/AddEmployee'

class App extends Component {
  render() {
    return (
      <>
        <Employees />
        <AddEmployee />
      </>
    )
  }
}

export default App
