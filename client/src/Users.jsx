import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    const [users,setUsers] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=> setUsers(result.data))
        .catch(err=>console.log(err))
    })

    const handleDelete = () =>{
        axios.delete('http://localhost:3001/deleteUser/')
        .then(res=>console.log(res),
        window.location.reload()
    )}


  return (
    <div>
        <div className="d-flex vh-100 bg-primary justify-content-center
        align-item-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to= '/create' className='btn btn-success'>ADD</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((users)=>{
                                return <tr>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.age}</td>
                                    <td>
                                        <Link to={'/update'} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Users;