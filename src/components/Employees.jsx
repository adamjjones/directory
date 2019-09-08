import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import EmployeeForm from '../components/EmployeeForm'
import EmployeeDetails from './EmployeeDetails'

const Employees = props => {
  console.log()
  console.log('employees props', props)
  return (
    <>
      <Router>
        <nav className="nav">
          <Link to="/">Home</Link> &nbsp;
          <Link to="/employee/add">Add employee</Link> &nbsp;
          <Link to="/employee/delete">Delete employee</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <table>
              <tbody>
                {props.employees.map(e => {
                  return (
                    <tr key={e.id}>
                      <td>
                        <Link to={`/employee/${e.id}`}>
                          {e.firstName}&nbsp;
                          {e.lastName}
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Route>
          <Route path="/employee/add" exact>
            <EmployeeForm {...props} />
          </Route>
          <Route
            path="/employee/:id"
            render={cprops => {
              const employee = props.employees.filter(e => {
                return e.id === parseInt(cprops.match.params.id)
              })
              return (
                <>
                  <EmployeeDetails employee={employee} />
                  {/* <pre>
                    {JSON.stringify(cprops, '', 2)}
                    {JSON.stringify(employee, '', 2)}
                  </pre> */}
                </>
              )
            }}
          ></Route>
          <Route path="/employee/:id/edit" render={() => {}} />
        </Switch>
      </Router>
    </>
  )
}
export default Employees
