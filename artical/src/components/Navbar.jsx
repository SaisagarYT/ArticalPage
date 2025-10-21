import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center gap-2'>
        <div className='w-14 h-14 bg-amber-400'>

        </div>
        <p>TECHMESTORY</p>
      </div>
      <ul>
        <li>HOME</li>
        <li>NEWS</li>
        <li>PODCASTS</li>
        <li>RESOURCES</li>
      </ul>
      <button className='bg-(--text-accent)'>
        Contact Us
      </button>
    </div>
  )
}

export default Navbar
