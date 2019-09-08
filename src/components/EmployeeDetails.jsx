import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeDetails = props => {
  return (
    <div>
      <p>This is the employee page</p>
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
                <td>{e.lastName}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeDetails
