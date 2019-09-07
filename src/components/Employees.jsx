import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import addEmployee from '../components/AddEmployee'
import AddEmployee from '../components/AddEmployee'

const Employees = props => {
  return (
    <>
      <Router>
        <nav className="nav">
          <Link to="/AddEmployee">Add an employee</Link> &nbsp;
          <Link to="/EmployeeDetails">Delete employee</Link>
        </nav>
        <Switch>
          <Route path="/AddEmployee" exact component={AddEmployee} />
        </Switch>
      </Router>
    </>
  )
}
export default Employees
