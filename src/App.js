import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Employees from './components/Employees'
import AddEmployee from './components/AddEmployee'

const App = props => {
  useEffect(() => {
    getData()
    changeData()
  }, [])

  let [employees, setEmployees] = useState([])
  const getData = async () => {
    const response = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/AdamsCoolCo/employees/`
    )
    setEmployees(response.data)
    console.log(response.data)
  }

  const changeData = async () => {
    const response = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/AdamsCoolCo/employees/`
    )
    console.log(response.data)
  }

  return (
    <Router>
      <div>
        <h1>Directory</h1>
      </div>
      <Switch>
        <Employees employees={employees} />
        <Link to="/"></Link>
      </Switch>
    </Router>
  )
}

export default App
