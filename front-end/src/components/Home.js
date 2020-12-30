import React,{useEffect,useState} from 'react'
import CustServices from '../services/CustServices'
import {Link , useParams} from "react-router-dom"
function Home() {
    const [customers,setCustomers] = useState([])
    const {id} = useParams()
    console.log(customers);
    useEffect(() => {
        retriveCustomers()
    },[]);

    const retriveCustomers =()=>{
        CustServices.getAll()
        .then(res =>{
            setCustomers(res.data);
            console.log(res.data);
        })
        .catch(e =>{
            console.log(e);
        })
    }

    const deleteCust =id=>{
        CustServices.remove(id);
        retriveCustomers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border shadow">
                     <thead className="table-dark">
                         <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                         </tr>
                        </thead>
                        <tbody>
                        { customers.map((user,index) => (
                            <tr>
                                <th scope="row">{index +1}</th>
                                <td className="post">{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                
                                <td>
                                    <Link className="btn btn-primary m-2 " to={`/cust/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary  m-2" to={`/user/Edit/${user.id}`}  >Edit</Link>
                                    <Link className="btn btn-danger" onClick={()=> deleteCust(user.id)}>Delete</Link>
                                </td>
                                
                            </tr>
                        ))}
                        </tbody>
                            
                        
                </table>
            </div>
        </div>
    )
}

export default Home
