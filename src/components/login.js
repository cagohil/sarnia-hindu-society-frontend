/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


// const host = "http://localhost:8000";
//   const host = "https://3.15.117.216:8000";
const host = "https://sarniahindusociety.org:8000";




const login = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [credentials, setCredentials] = useState({email:"", password:""})
    const navigate = useNavigate();
    

    const handleSubmit = async (e)=>{
        try {
            e.preventDefault();
            const response = await fetch(`${host}/api/admin/adminlogin`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email: credentials.email, password: credentials.password})
            });
            const json = await response.json()
            console.log(json);
            if(json.success){
                localStorage.setItem('adminToken',json.adminToken)
                toast.success('Login Successfully!');
                navigate("/");
            }
            else{
                toast.error('Invalid Credentials')
            }
        } catch (error) {
            console.log(error.massage);
            toast.error('Internal Server Error')
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
          <div >
            <div className='' style={{ fontFamily: "Georgia, Times New Roman, Times, seri" }}>
                <div className="container pt-3 pb-3">
                    <div className="text-center inpagecontent">
                        <p className='headclass'>Admin Login</p>
                        <form  onSubmit={handleSubmit}>
                        <p><input name='email' type="email" placeholder="Enter your admin id"  value={credentials.email} onChange={onChange} className="input-connect" /></p>
                        <p><input name='password' type="password" placeholder="Enter your password" value={credentials.password}  onChange={onChange} className="input-connect" /></p>
                        <button className="join-now-btn " type="onSubmit" value="Send"  > Login </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default login