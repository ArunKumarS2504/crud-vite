import { useState } from "react";
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function UpdateUser(){
  // const {id} = useParams()
const [name, setName]=useState();
const [email,setEmail]=useState();
const [age,setAge]=useState();
const navigate = useNavigate();


// useEffect(()=>{
//   axios.get('http//:localhost:3001/getUser/')
//   .then((result)=>{
//     console.log(result)
//     setName(result.data.name)
//     setAge(result.data.age)
//     setEmail(result.data.email)
//   })
// })

const handleUpdate=(e)=>{
  e.preventDefault();
  axios.put('http://localhost:3001/updateUser',{name,email,age})
  .then(result=>{
    console.log(result)
    navigate('/')
  })
}
    return(
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"> 
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleUpdate}>
                        <h2>Update User</h2>
                        <div className="mb-2">
                            Name:
                            <input type="text" placeholder="Enter Name" className="form-control"
                            onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="mb-2">
                            Email:
                            <input type="text" placeholder="Enter Email" className="form-control"
                             onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-2">
                            Age:
                            <input type="text" placeholder="Enter Age" className="form-control"
                             onChange={(e)=>{setAge(e.target.value)}}/>
                        </div>
                        <button className="btn btn-success" onClick={handleUpdate}>update</button>
                    </form>
                </div>
            </div>
        </div>
      )
}

export default UpdateUser;