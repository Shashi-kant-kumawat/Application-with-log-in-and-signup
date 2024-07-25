import React, { useEffect, useState } from 'react'
import useUser from './Userinformation'

function Login() {
    const {setInformation}=useUser()
    const[number,setNumber]=useState(null)
    const Checking=(e)=>{
            if(/^\d*$/.test(e.target.value)){
                setNumber(e.target.value)
            }
    }
    const Submit=(e)=>{
        e.preventDefault()
        let name=document.getElementById("name").value ;
    let mname=document.getElementById("mname").value ;
    let lname=document.getElementById("lname").value ;
    let add=document.getElementById("add").value ;
    let email=document.getElementById("email").value ;
    let date=document.getElementById("date").value ;
    let phoneno=document.getElementById("phoneno").value ;
    
    let info="Fullname ="+name+" "+mname+" "+lname +", address = "+add +", email = "+email+",Date of birth is = "+date+", Phone number is = "+phoneno+","
        
  setInformation(info)
    }

    return (
        <div className='w-full flex  place-content-center flex-row items-center'>
            <form onSubmit={Submit} className=' flex-col bg-sky-500 bg-opacity-35 p-4 mt-3 rounded-lg grid  gap-5 w-80 font-semibold sm:w-[450px] text-gray-700 '>
                <div className='flex flex-col gap-1  '>
                    <label className='hover:text-blue-500 hover:underline hover:cursor-pointer' htmlFor='name'>First Name :</label>
                    <input className='p-1' id='name' type='text' placeholder='write First name ' required></input>
                </div>
                <div className='flex flex-col gap-1 '>
                    <label className='hover:text-blue-500 hover:underline hover:cursor-pointer' htmlFor='mname'>Middle Name :</label>
                    <input className='p-1' id='mname' type='text' placeholder='write middle name '></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='hover:text-blue-500 hover:underline hover:cursor-pointer' htmlFor='lname'>Last Name :</label>
                    <input className='p-1' id='lname' type='text' placeholder='write last name ' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='hover:text-blue-500 hover:underline hover:cursor-pointer' htmlFor='add'>Address:</label>
                    <input className='p-1' id='add' type='text' placeholder='write your address ' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='hover:text-blue-500 hover:underline hover:cursor-pointer' htmlFor='email'>Email :</label>
                    <input id='email' className='p-1' type='email' placeholder='write your email ' required></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='hover:text-blue-500 hover:underline hover:cursor-pointer' htmlFor='date'>DOB :</label>
                    <input className='p-1 text-gray-600' id='date' type='date' required ></input>
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='hover:text-blue-500 hover:underline hover:cursor-pointer ' htmlFor='phoneno'>Phone no. :</label>
                    <input className='p-1' id='phoneno' type='text' value={number} onChange={Checking} maxLength={10} placeholder='write your phone number 'required></input>
                </div>
                <div className='flex place-content-center'>
                <button className='w-28 bg-slate-900 text-white rounded-lg  text-lg hover:text-blue-800 hover:bg-white'>Submit</button>
                </div>
            </form>
            
        </div>
    )
}

export default Login
