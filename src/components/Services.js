import React from 'react'

function Services() {
  return (
    <div>
      <div className='flex flex-row flex-wrap place-content-center '>
        <a href='https://angular.dev/overview'>
        <div className='mx-8 w-80 h-[500px] flex flex-col place-content-center bg-slate-200 items-center text-center space-y-4 my-8 py-4 rounded-lg hover:bg-red-500 hover:text-white'>
            <div>
            <img className='size-28 p-5 bg-red-100 rounded-full mt-3' src='pngangular.png'></img>
            </div>
            <p className='text-lg font-bold'>Angular Development</p>
            <p>Airsme is a leading Angular JS (Java Script-based) development 
                company that specializes in creating high-quality, and browser-centric 
                applications. Our experienced, expert developers are very adept in designing
                 all the features of the framework. Our forte is building glitch-free, expressive, 
                 and readable applications using Angular JS, at the most affordable prices</p>
        </div>
        </a>
        <a href='https://www.mongodb.com/resources/languages/mern-stack'>
        <div className='mx-8 h-[500px] w-80 flex flex-col place-content-center bg-slate-200 items-center text-center space-y-4 my-8 py-4 rounded-lg hover:bg-green-600 hover:text-white'>
            <div>
            <img className='size-28 p-5 bg-green-200 rounded-full mt-3' src='pngmernstack.png'></img>
            </div>
            <p className='text-lg font-bold'>MEAN Stack App Development</p>
            <p>It helps you build fast, robust, and maintainable production
               web applications using MongoDB, Express, Angular, and Node.js.
                Mean Stack offers Fast MVP development and scalability</p>
        </div>
        </a>
        <a href='https://react.dev/'>
        <div className='mx-8 h-[500px] w-80 flex flex-col place-content-center bg-slate-200 items-center text-center space-y-4 my-8 py-4 rounded-lg hover:bg-sky-600 hover:text-white'>
            <div>
            <img className='size-28 p-5 bg-sky-100 rounded-full mt-3' src='logo192.png'></img>
            </div>
            <p className='text-lg font-bold'>React Js Development</p>
            <p>Our offshore React JS developers build interactive UI/UX design for real-time 
              user experience, giving you the high-speed experience in terms of usability.
               Airsme developers have been catering to this field for years, bringing this
                latest technology to your doorsteps. Our React JS programmers provide quick 
                deployment of new React projects, and deliver them in the market with reliability, absolutely error-free.</p>
        </div>
        </a>
        <a href='https://developer.android.com/guide'>
        <div className='mx-8 h-[500px] w-80 flex flex-col place-content-center bg-slate-200 items-center text-center space-y-4 my-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white'>
            <div>
            <img className='size-28 p-5 bg-blue-200 rounded-full mt-3' src='round.png'></img>
            </div>
            <p className='text-lg font-bold'>Application Development</p>
            <p>Airsme, India is one of the most renowned mobile application 
              development companies that began making Windows, Android and 
              iOS apps long back. We have always provided best service in mobile 
              & IOS app developments on outsourcing basis till date. When you choose 
              Airsme, rest assured, you are partnering with the most efficient development 
              company that has been planning and developing feature-rich mobile applications for years in successful ways.</p>
        </div>
        </a>
      </div>
    </div>
  )
}

export default Services
