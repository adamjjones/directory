import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Employees from './components/Employees'
// import AddEmployee from './components/AddEmployee'

const headers = {
  'Content-Type': 'application/json'
}
const App = props => {
  useEffect(() => {
    getData()
  }, [])

  let [employees, setEmployees] = useState([])
  const getData = async () => {
    const response = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/AdamsCoolCo/employees/`
    )
    setEmployees(response.data)
    console.log(employees)
  }

  const addData = async newEmployee => {
    debugger
    console.log('addData was passed this', newEmployee)
    const response = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/AdamsCoolCo/employees/`,
      newEmployee,
      {
        headers: headers
      }

      // {
      //   firstName: 'sup',
      //   lastName: 'lastname'
      // }
    )
    console.log(response.data)
    setEmployees([response.data, ...employees])
  }

  return (
    <Router>
      <section className="front-header">
        <div>Directory</div>
      </section>
      <Switch>
        <Employees addData={addData} employees={employees} />
      </Switch>
      <footer>Made with &hearts; by Adam Jones</footer>
    </Router>
  )
}

export default App
