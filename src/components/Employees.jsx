import React, { useEffect } from 'react'
import axios from 'axios'
import addEmployee from '../components/AddEmployee'

const Employees = () => {
  const getData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/AdamsCoolCo/employees/`
    )
    console.log(resp.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>It works</h1>
    </div>
  )
}
export default Employees
