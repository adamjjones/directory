import React, { useEffect } from 'react'
import axios from 'axios'

const AddEmployee = () => {
  const changeData = async () => {
    const resp = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/AdamsCoolCo/employees/`
    )
    console.log(resp.data)
  }

  useEffect(() => {
    changeData()
  }, [])

  return (
    <div>
      <h1>It works 2</h1>
    </div>
  )
}
export default AddEmployee
