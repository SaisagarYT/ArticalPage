import React from 'react'
import Navbar from '../components/Navbar'
import Webassets from '../assets/Assets'

const Homepage = () => {

  return (
    <section className='w-full'>
      <Navbar/>
      <div className='w-full bg-(--bg-background) h-screen flex'>
        <div className='flex justify-between items-center flex-col flex-1/2 border border-(--bg-primary)'>
          <div className='flex flex-col gap-8 w-3/4 justify-center h-full'>
            <h1 className='text-(--text-secondary) text-3xl'>Your Journey to Tomorrow Begins Here</h1>
            <h1 className='text-7xl'>Explore the Frontiers of Artificial Intelligence</h1>
            <p className='text-lg text-(--text-secondary)'>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
          </div>
          <ul className='flex w-full'>
            <li className='flex border justify-center items-center py-14 border-(--bg-primary) flex-col flex-1/2'>
              <p className='text-4xl'>300+</p>
              <p className='text-(--text-secondary)'>Resource available</p>
            </li>
            <li className='flex py-14 items-center border border-(--bg-primary) flex-col flex-1/2'>
              <p className='text-4xl'>12k+</p>
              <p className='text-(--text-secondary)' >Total Downloads</p>
            </li>
            <li className='flex justify-center items-center py-14 border border-(--bg-primary) flex-col flex-1/2'>
              <p className='text-4xl'>10k+</p>
              <p className='text-(--text-secondary)' >Active Users</p>
            </li>
          </ul>
        </div>
        <div className='flex flex-1/2 border border-(--bg-primary)'>
          <div className='w-full relative overflow-hidden bg-black'>
            <img className='opacity-50' src={Webassets.lightSphere} alt="" />
            <div className='absolute bottom-1/8 left-1/5 bg-(--bg-background) shadow-xl px-10 py-5 rounded-2xl'>
              <div className='w-full flex flex-col items-start gap-6'>
                <div className='bg-(--bg-primary) flex items-center justify-center rounded-4xl overflow-hidden w-51 py-1'>
                  <ul className='flex w-full translate-x-6 items-center justify-center'>
                    <img className='' src={Webassets.person1} alt="" />
                    <img className='-translate-x-4 z-10' src={Webassets.person1} alt="" />
                    <img className='-translate-x-8 z-10' src={Webassets.person1} alt="" />
                    <img className='-translate-x-12 z-10' src={Webassets.person1} alt="" />
                  </ul>
                </div>
                <p className='text-2xl'>Explore 1000+ resources</p>
                <p className='text-lg text-(--text-secondary)'>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                <button className='flex py-2 px-3 border items-center border-(--text-secondary) border-dashed rounded-lg'>
                  Explore Resources
                  <img className='scale-30' src={Webassets.arrowMark} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
