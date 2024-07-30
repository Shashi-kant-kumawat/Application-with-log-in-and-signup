import React, { useState } from 'react';
import { Navigate, Link } from "react-router-dom";
import useUser from './context.api/usertoCOntext';
function Login() {
    const {setPlease_log_in}=useUser()
    const [thats, setThats] = useState(false)
    const [thatsgo, setThatsgo] = useState(false)
    if (thatsgo) {
        return <Navigate to="/"></Navigate>
    }
    const Submit = (e) => {
        e.preventDefault()
        let name = document.getElementById("name").value;
        let last_name = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let entery = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : alert("please sign up first") ? [] : []

        for (let i = 0; i < entery.length; i++) {
            let vr = entery[i]
            if(i===entery.length-1){
                if(vr.email !==email){
                    alert("please Sign up and then log in")
                }
            }
            if (vr.email === email || vr.phoneno === email) {
                if (vr.password === password) {
                    if (vr.name === name) {
                        if (vr.lname === last_name) {
                            if (vr.selected === "Admin") {
                                console.log("Admin")
                                setPlease_log_in(true)
                                setThatsgo(true)
                                break
                            }
                            else {
                                console.log("user")
                                setThatsgo(true)
                                break
                            }
                        }
                        alert("last name is wrong")
                        break
                    }
                    alert("name is wrong")
                    break
                }
                alert("password is wrong")
                break
            }
        }
        document.getElementById("name").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

    }
    const Open = (e) => {
        e.preventDefault()
        setThats((prev) => !prev)
    }
    return (
        <div className='w-full flex  place-content-center flex-row items-center'>
            <form className=' flex-col bg-sky-500 bg-opacity-35 p-4 mt-3 rounded-lg grid  gap-5 w-80 font-semibold sm:w-[450px] text-gray-700 '>
                <div className='flex flex-col gap-1  '>
                    <label htmlFor='name'>First Name :</label>
                    <input className='p-1' id='name' type='text' placeholder='Enter your First name ' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='lname'>Last Name :</label>
                    <input className='p-1' id='lname' type='text' placeholder='Enter your last name' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email/Phone no. :</label>
                    <input id='email' className='p-1' type='email' placeholder='write your email/Phone no. ' required></input>
                </div>
                <div className='flex flex-col gap-1 '>
                    <label htmlFor='password'>Password :</label>
                    <div className='p-1 flex items-center place-content-center'>
                        <input className='w-full p-1' id="password" type={thats ? 'text' : 'password'} placeholder='Enter your password '></input>
                        <span className='bg-white px-1 h-full flex text-center items-center'><button onClick={Open}>{thats ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}</button></span>
                    </div>
                </div>
                {/* <div className='flex flex-col gap-1'>
                    <label  htmlFor='phoneno'>Phone no. :</label>
                    <input className='p-1' id='phoneno' type='text' value={number} onChange={Checking} maxLength={10} placeholder='write your phone number ' required></input>
                </div> */}
                <div className='flex place-content-center gap-5'>
                    <button onClick={Submit} className='w-28 bg-slate-900 text-white rounded-lg  text-lg hover:text-blue-800 hover:bg-white'>Submit</button>
                    <button className='w-28 bg-slate-900 text-white rounded-lg  text-lg hover:text-blue-800 hover:bg-white'><Link to='/signup'>Sign up</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Login
