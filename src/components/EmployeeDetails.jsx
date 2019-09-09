import React from 'react'
import { Route, Link } from 'react-router-dom'
import Employees from './Employees'

const EmployeeDetails = props => {
  console.log(props)
  return (
    <div>
      {/* <pre>{JSON.stringify(props.employee, '', 2)}</pre> */}
      <p>{props.employee.firstName}</p>
      <p>{props.employee.lastName}</p>
      <p>{props.employee.id}</p>
      <p>{props.employee.isFullTime}</p>
    </div>
  )
}

export default EmployeeDetails
