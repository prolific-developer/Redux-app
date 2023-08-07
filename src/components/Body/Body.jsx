import React from 'react'

const Body = () => {
    
  return (
    <>
    
        <div className=' flex justify-center bg-purple-700 h-[350px] ' >
            <div className=' text-white m-10 '>
            <h1 className=' flex justify-center m-3 text-5xl font-medium p-10'>Redux</h1>
            <p className=' m-3 text-2xl ml-5'>A Predictable State Container for JS Apps</p>
            <div className='flex justify-center '>
            <button className=' m-3 font-bold bg-white rounded w-32 h-12 bg- white -500 text-black rounded-lg'>Get Started</button>
            </div>
            
            </div>

        </div>
   
    
    

    
        <div className='flex rgb(255, 255, 255) h-[650px] mx-10'>
            <div className='m-10'>
                    <div className='w-50 h-50'><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div>
                    <h1 className='mb-5 rgb(0, 0, 0) text-3xl font-medium'>Predictable</h1>
                    <p className=''>Redux helps you write applications that behave consistently, run in different <br />
                    environments (client, server, and native), and are easy to test. </p>
            </div>
                <div className='m-10'>
                    <img src="" alt="" />
                    <h1 className='mb-5 rgb(0, 0, 0) text-3xl font-medium'>Centralized</h1>
                    <p>Centralizing your application's state and logic enables powerful <br /> 
                    capabilities like undo/redo, state persistence, and much more. </p>
                </div>
            <div className='m-10'>
                    <img src="" alt="" />
                    <h1 className='mb-5 rgb(0, 0, 0) text-3xl font-medium'>Debuggable</h1>
                    <p> The Redux DevTools make it easy to trace when, where, why, and how your <br /> 
                    application's state changed. Redux's architecture lets you log changes, use "time-travel <br />
                    debugging", and even send complete error reports to a server. </p>
            </div>
                <div className='m-10'>
                    <img src="" alt="" />
                    <h1 className='mb-5 rgb(0, 0, 0) text-3xl font-medium'>Flexible</h1>
                    <p> Redux works with any UI layer, and has a large ecosystem of addons to fit your needs.</p>
                </div>
        </div>
    
    </>
  )
  
}

export default Body
