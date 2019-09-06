import React, { useEffect } from 'react'
import axios from 'axios'
import addEmployee from '../components/AddEmployee'

const Employees = props => {
  return (
    <div>
      <h1>It works</h1>
      <pre>{JSON.stringify(props.employees, null, 2)}</pre>
    </div>
  )
}
export default Employees
