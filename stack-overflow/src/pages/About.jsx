import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Stack Overflow</h1>
      <p className='mb-4 text-2xl font-light'>

        A React app that allows users to search posts and return results. 

        Environment: 
            Font-End: React
            Back-End: Node.JS 
            Databases: SQL Server Mangement Studio(SSMS)
        
        <strong>
          <a href='https://github.com/crystalmori'> Crytal Mori</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By: 
        <a className='text-white' href='https://daisyui.com/'>
        DaisyUI - Tailwind
        </a>
      </p>
    </div>
  )
}

export default About
