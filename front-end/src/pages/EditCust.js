import React, { useState , useEffect } from 'react'
import { useParams,Link  } from 'react-router-dom';

import CustServices from "../services/CustServices";

const EditCust =()=>{
//    let history = useHistory();
    const { id } = useParams();
   const instialState = {
       id:null,
      name: "",
      phone:"",
      email: "",
      address: "",
      
    }
    const [cust, setCust] = useState(instialState)
    const [message, setMessage] = useState('')

    
    const onSubmit = async e => {
        e.preventDefault();
        
      }

  const handelInputChange = e => {
    setCust({ ...cust, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    const res = CustServices.get(id)
    .then(res =>{
        setCust(res.data);
        console.log(res.data);
    })
    .catch(e =>{
        console.log(e);
    })
    
  };
  const updateCust =()=>{
    CustServices.update(cust.id, cust)
    .then(res =>{
        console.log(res.data);
        setMessage("The student was updated successfully!");

    })
    .catch(e =>{
        console.log(e);
    });
};
    
    return (
        <div className="container">
               <Link className="btn btn-primary" to="/home">
          back to Home
        </Link>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className='text-center md-4'>Edit A Customer</h2>
                   <form class="row g-3" onSubmit={e => onSubmit(e)}>
                    <div className='container '>
                        <div className="col-md-12">
                            <label for="inputName14" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name"  placeholder="Enter Your Name"
                            name="name"
                            value={cust.name}
                            onChange={e => handelInputChange(e)}/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputPhone4" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone"  placeholder="Enter Your Phone Number"
                            name="phone"
                            value={cust.phone}
                            onChange={e => handelInputChange(e)}/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmaill4" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email"  placeholder="Enter Your Email"
                            name="email"
                            value={cust.email}
                            onChange={e => handelInputChange(e)}/>
                        </div>
                        <div className="col-md-12">
                            <label for="inputAddress14" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address"  placeholder="Enter Your Address"
                            name="address"
                            value={cust.address}
                            onChange={e => handelInputChange(e)}/>
                        </div>
                        <div class=" m-2 md-18">
                        <button class="btn btn-primary" onClick={updateCust} type="button">Submit</button>
                        {message}
                        </div>
                     </div>
                   </form>
                </div>
             </div>
     )
}



export default EditCust
