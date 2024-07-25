import React from 'react'
import useUser from './Userinformation'

function Footer() {
  const{information}=useUser()
  return (
    <div>
      <div className=' flex flex-row gap-5 mx-1 sm:mx-5'>
       {information}
      
      </div>
    </div>
  )
}

export default Footer
