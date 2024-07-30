import React, { useEffect, useState } from 'react';
import useUser from './context.api/usertoCOntext';

function Admin() {
  const [remove_user, setRemove_user] = useState("");
  const [remove_true, setRemove_true] = useState(false)
  const { please_log_in } = useUser()
  let localstorage_items = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []  
    let tty=[]
    if (remove_true === true) {
      for(let i=0;i<localstorage_items.length;i++){
      let  tr=localstorage_items[i]
        if(tr.email!==remove_user){
                tty.push(tr)
                console.log(i,"code is run")
        }
      }
      setRemove_true(false)
    localStorage.clear()
    localStorage.setItem("user",JSON.stringify(tty))
    }
    
  

  return (
    <div >
      {!please_log_in && <div className='flex w-full h-screen place-content-center items-center '>
        <p className='text-[4rem]'>THIS PAGE IS ONLY FOR ADMIN</p>
      </div>}
      {please_log_in && <div>
        <div className='flex w-full place-content-center px-12 pt-8 gap-8 flex-wrap'>
          {localstorage_items.map((value) => {
            return <div key={value.email} className='bg-orange-100 px-5 py-5 flex flex-col gap-2 rounded-2xl'>
              <div className='flex justify-between gap-4 '>
                <h3 className='rounded-2xl px-4 bg-blue-950 text-white '>All details of {value.name} {value.selected === "Admin" ? `(${value.selected})` : ""}</h3>
                <button onClick={() => { setRemove_user(value.email) || setRemove_true(true) }} className='rounded-2xl px-2 bg-red-600 text-white hover:underline'>Remove</button>
              </div>
              <div className='bg-blue-100 px-2 py-2 flex flex-col gap-2 rounded-2xl'>
                <p>Full Name :- {`${value.name} ${value.lname}`}</p>
                <p>Address :- {value.add}</p>
                <p>Email :- {value.email}</p>
                <p>Password :- {value.password}</p>
                <p>Date of birth is :- {value.date}</p>
                <p>Phone Number :- {value.phoneno}</p>
              </div>
            </div>
          })}
        </div>

      </div>}
    </div>
  )
}

export default Admin
