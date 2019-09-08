import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AddEmployee from '../components/AddEmployee'
import EmployeeDetails from './EmployeeDetails'

const Employees = props => {
  console.log('employees props', props)
  return (
    <>
      <Router>
        <nav className="nav">
          <Link to="/">Home</Link> &nbsp;
          <Link to="/AddEmployee">Add employee</Link> &nbsp;
          <Link to="/EmployeeDetails">Delete employee</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <EmployeeDetails {...props} />
          </Route>
          <Route path="/AddEmployee" exact>
            <AddEmployee {...props} />
          </Route>
          <Route path="/EmployeeDetails" exact></Route>
        </Switch>
      </Router>
    </>
  )
}
export default Employees
