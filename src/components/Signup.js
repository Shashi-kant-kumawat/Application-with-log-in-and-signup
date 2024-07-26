import React, { useState } from 'react';
import {Link} from "react-router-dom"
function Signup() {
    const [number, setNumber] = useState("") ;
    const [thats,setThats]=useState(false)
    const Checking = (e) => {
        if (/^\d*$/.test(e.target.value)) {
            setNumber(e.target.value)
        }
    }
    const Submit = (e) => {
        e.preventDefault()
        let btn=document.getElementById("btn")
        btn.style.background="white"
        setTimeout(()=>{
            btn.style.background="#1a202c"
        },100)
        let name = document.getElementById("name").value;
        let lname = document.getElementById("lname").value;
        let add = document.getElementById("add").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let date = document.getElementById("date").value;
        let phoneno = document.getElementById("phoneno").value;
        let arr = []
        arr = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []
        if (arr.some((v) => {
            return v.email === email || v.phoneno === phoneno

        })) {
            alert("Dublicate id is not allowed")
        }
        else {
            arr.push({
                name,
                lname,
                add,
                email,
                password,
                date,
                phoneno
            })
        }
        localStorage.setItem("user", JSON.stringify(arr))
        document.getElementById("name").value=""
        document.getElementById("lname").value=""
        document.getElementById("add").value=""
        document.getElementById("email").value=""
        document.getElementById("password").value=""
        document.getElementById("date").value=""
        document.getElementById("phoneno").value=""
    }
    const Open=(e)=>{
     e.preventDefault()
     setThats((prev)=>!prev)
    }

    return (
        <div className='w-full flex  place-content-center flex-row items-center'>
            <form  className=' flex-col bg-sky-500 bg-opacity-35 p-4 mt-3 rounded-lg grid  gap-5 w-80 font-semibold sm:w-[450px] text-gray-700 '>
                <div className='flex flex-col gap-1  '>
                    <label  htmlFor='name'>First Name :</label>
                    <input className='p-1' id='name' type='text' placeholder='write First name ' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label  htmlFor='lname'>Last Name :</label>
                    <input className='p-1' id='lname' type='text' placeholder='write last name ' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label  htmlFor='add'>Address:</label>
                    <input className='p-1' id='add' type='text' placeholder='write your address ' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label  htmlFor='email'>Email :</label>
                    <input id='email' className='p-1' type='email' placeholder='write your email ' required></input>
                </div>
                <div className='flex flex-col gap-1 '>
                    <label  htmlFor='passwrod'>Password :</label>
                    <div className='p-1 flex items-center place-content-center  '>
                    <input className='w-full p-1' id="password" type={thats?'text':'password'} placeholder='Enter your password '></input>
                    <span className='bg-white px-1 h-full flex text-center items-center'><button onClick={Open}>{thats?<i className="fas fa-eye"></i>:<i className="fas fa-eye-slash"></i> }</button></span>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label  htmlFor='date'>DOB :</label>
                    <input className='p-1 text-gray-600' id='date' type='date' required ></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label  htmlFor='phoneno'>Phone no. :</label>
                    <input className='p-1' id='phoneno' type='text' value={number} onChange={Checking} minLength={10} maxLength={10} placeholder='write your phone number ' required></input>
                </div>
                <div className='flex place-content-center gap-5'>
                    <button onClick={Submit} id='btn' className='w-28 bg-slate-900 text-white rounded-lg  text-lg hover:text-blue-800 hover:bg-white'>Submit</button>
                    <button className=' w-28 bg-slate-900 text-white rounded-lg  text-lg hover:text-blue-800 hover:bg-white'><Link to='/login'>Log in</Link></button>
                </div>
            </form>

        </div>
    )
}

export default Signup ;
