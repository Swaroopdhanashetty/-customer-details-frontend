import httpServices from './httpServices';

const getAll =()=>{
    return httpServices.get('/customers');

}
const get =(id)=>{
    return httpServices.get(`/customers/${id}`); 

};
const findByName =(name)=>{
    console.log("Inside Student Service Find by name: "+name);
    return httpServices.get(`/customers?name=${name}`);

};
const create =(data)=> {
    return httpServices.post("/customers",data);
};
const update =(id,data)=>{
    return httpServices.patch(`/customers/${id}`,data);
};
const remove =(id)=> {
    return httpServices.delete(`/customers/${id}`);
};
const removeAll =(data)=>{
    return httpServices.removeAll('/customers');
}

const login =(username,password)=>{
    return httpServices.post('/customers/login',username,password)
}
export default{
getAll,
get,
create,
update,
remove,
findByName,
removeAll,
login
};
