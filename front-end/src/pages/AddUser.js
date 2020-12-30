import React, { useState } from 'react'
import CustServices from "../services/CustServices";

function AddUser() {
  const initalState = {
        id:null,
        name:'',
        phone:'',
        email:'',
        address:''
    };
    const [cust,setCust] = useState(initalState)
    const [message, setMessage] = useState('');


    const {name,phone,email,address} = cust;

    const onInputChange =(e)=>{
        console.log(e.target.value);
        setCust({...cust,[e.target.name]: e.target.value})
    }

    const saveCust =()=>{
        var data = {
            id:cust.id,
            name:cust.name,
            email:cust.email,
            phone:cust.phone,
            address:cust.address
        };
        CustServices.create(data)
        .then(res =>{
            setCust({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone,
                address: res.data.address

            })
            setCust(initalState);
            setMessage("The Customer added  successfully!");

           
        })
     }
   

    const onSubmit=(e) =>{
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className='text-center md-4'>Add A Customer</h2>
                   <form class="row g-3" onSubmit={e => onSubmit(e)}>
                    <div className='container '>
                        <div className="col-md-12">
                            <label for="inputName14" className="form-label">Name</label>
                            <input type="name" className="form-control" id="inputName14"  placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputPhone4" className="form-label">Phone</label>
                            <input type="phone" className="form-control" id="inputPhone4"  placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmaill4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmaill4"  placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputAddress14" className="form-label">Address</label>
                            <input type="address" className="form-control" id="inputAddress14"  placeholder="Enter Your Address"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)}/>
                        </div>
                        <div class=" m-2 md-18">
                        <button class="btn btn-primary" onClick={saveCust} type="button">Submit</button>
                           <h3>{message}</h3> 
                        </div>
                     </div>
                   </form>
                </div>
             </div>
     )
}



export default AddUser
