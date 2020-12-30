import React,{useState,useEffect}from 'react'
import { Link, useParams } from "react-router-dom";
import CustServices from '../services/CustServices'

function Customer() {
  const {id} = useParams();
    const [cust,setCust] = useState({
        name:'',
        phone:'',
        email:'',
        address:''
    });

    
    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser =()=>{
      CustServices.get(id)
       .then(res =>{
        setCust( { 
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          address: res.data.address});
          console.log(res.data);
  
       }).catch(e =>{
         console.log(e);
       })
    }
       
    return (
        <div className="container py-4">
        <Link className="btn btn-primary" to="/home">
          back to Home
        </Link>
        <h1 className="display-4">name: {cust.name}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">name: {cust.name}</li>
          <li className="list-group-item">email: {cust.email}</li>
          <li className="list-group-item">phone: {cust.phone}</li>
          <li className="list-group-item">address: {cust.address}</li>
        </ul>
      </div>
    )
}

export default Customer
