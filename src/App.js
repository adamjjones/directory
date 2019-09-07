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
    console.log(employees)
  }

  const changeData = async () => {
    const response = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/AdamsCO/employees/`,
      {
        firstName: 'sup',
        lastName: 'lastname'
      }
    )
    console.log(response.data)
  }

  return (
    <Router>
      <section className="front-header">
        <span>Directory</span>
      </section>
      <Switch>
        <Employees />
      </Switch>
      <footer>Made with &hearts; by Adam Jones</footer>
    </Router>
  )
}

export default App
