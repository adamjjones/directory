import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import App from '../App'
// import Employees from './Employees'

const AddEmployee = props => {
  let [newEmployee, setnewEmployee] = useState({})
  const eventHandler = event => {
    const id = event.target.id
    let val = event.target.value
    switch (id) {
      case 'isFullTime':
        val = val === 'on' ? true : false
        break
      default:
        break
    }
    setnewEmployee(
      Object.assign(newEmployee, {
        [id]: val
      })
    )
    console.log(event.target.id)
  }

  console.log('addEmployee props', props)
  return (
    <div className="fields">
      <span>
        First name: <input id="firstName" onChange={eventHandler} />
      </span>

      <span>
        Last name: <input id="lastName" onChange={eventHandler} />
      </span>

      <span>
        Date of Birth:{' '}
        <input id="birthday" type="date" onChange={eventHandler} />
      </span>

      <span>
        Fulltime:{' '}
        <input id="isFullTime" type="checkbox" onChange={eventHandler} />
      </span>

      <span>
        <input
          type="submit"
          onClick={() => {
            props.addData(newEmployee)
          }}
        />
      </span>
    </div>
  )
}
export default AddEmployee
