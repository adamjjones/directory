import React from 'react'
import { Route, Link } from 'react-router-dom'
import Employees from './Employees'

const EmployeeDetails = props => {
  console.log(props)
  return (
    <div>
      <pre>{JSON.stringify(props.employee, '', 2)}</pre>
    </div>
  )
}

export default EmployeeDetails
