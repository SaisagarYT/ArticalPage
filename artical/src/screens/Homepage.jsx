import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Webassets from '../assets/Assets'
import HomepageCard from '../reusableComponents/HomepageCard'
import HomepageFeatureCard from '../reusableComponents/HomepageFeatureCard'
import HomepageCategories from '../JSON/HomepageCategories.jsx';
import HomepageBlog from '../components/HomepageBlog.jsx'
import HomepageButton from '../reusableComponents/HomepageButton.jsx'
console.log(HomepageCategories);
const Homepage = () => {
  const [tab,setTab] = useState("All");
  return (
    <section className='w-full'>
      <Navbar/>
      <div className='w-full bg-(--bg-background) h-screen flex'>
        <div className='flex justify-between items-center flex-col flex-1/2 border-t border-l border-(--bg-primary)'>
          <div className='flex flex-col gap-8 w-3/4 justify-center h-full'>
            <h1 className='text-(--text-secondary) text-3xl'>Your Journey to Tomorrow Begins Here</h1>
            <h1 className='text-7xl'>Explore the Frontiers of Artificial Intelligence</h1>
            <p className='text-lg text-(--text-secondary)'>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
          </div>
          <ul className='flex w-full'>
            <li className='flex border-t justify-center items-center py-14 border-(--bg-primary) flex-col flex-1/2'>
              <p className='text-4xl'>300+</p>
              <p className='text-(--text-secondary)'>Resource available</p>
            </li>
            <li className='flex py-14 items-center border-t border-r border-l border-(--bg-primary) flex-col flex-1/2'>
              <p className='text-4xl'>12k+</p>
              <p className='text-(--text-secondary)' >Total Downloads</p>
            </li>
            <li className='flex justify-center items-center py-14 border-t border-(--bg-primary) flex-col flex-1/2'>
              <p className='text-4xl'>10k+</p>
              <p className='text-(--text-secondary)' >Active Users</p>
            </li>
          </ul>
        </div>
        <div className='flex flex-1/2 border-l border-r border-(--bg-primary)'>
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
                <HomepageButton text="Explore Resources" icon={Webassets.arrowMark}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen border-b border-b-(--bg-primary) border-t border-t-(--bg-primary) flex justify-center'>
        <HomepageCard icon={Webassets.icon1} title="Latest New Updates" subTitle="Stay Current" text="Over 1,000 articles published monthly" icon2={Webassets.arrowBackground}/>
        <HomepageCard icon={Webassets.icon1} title="Latest New Updates" subTitle="Stay Current" text="Over 1,000 articles published monthly" icon2={Webassets.arrowBackground}/>
        <HomepageCard icon={Webassets.icon1} title="Latest New Updates" subTitle="Stay Current" text="Over 1,000 articles published monthly" icon2={Webassets.arrowBackground}/>
      </div>
      <div className='w-full bg-(--bg-primary) py-20 px-30 flex items-start gap-4 justify-center flex-col'>
        <p className='bg-(--text-button) py-2 px-4 rounded-sm'>Unlock the Power of</p>
        <h1 className='text-6xl'>FutureTech Features</h1>
      </div>
      <div>
        <HomepageFeatureCard title="Future Technology Blog" para="Stay informed with our blog section dedicated to future technology." icon={Webassets.icon4}/>
        <HomepageFeatureCard title="Research Insights Blogs" para="Dive deep into future technology concepts with our research section." icon={Webassets.icon5}/>
      </div>
      <div className='w-full bg-(--bg-primary) py-20 px-30 flex items-start gap-4 justify-center flex-col'>
        <p className='bg-(--text-button) py-2 px-4 rounded-sm'>Unlock the Power of</p>
        <h1 className='text-6xl'>FutureTech Features</h1>
      </div>
      <div className='w-full py-10 flex justify-center gap-5'>
        {
          HomepageCategories.map((item,index) =>{
            return <button onClick={() => setTab(item.head)} className='py-5 rounded-md border-(--bg-primary) border px-8 bg-(--bg-secondary)' key={index}>
              {item.head}
            </button>
          })
        }
      </div>
      <div>
        <HomepageBlog
        image={Webassets.person1}
        name="Sagar Sylada"
        tag="@RocketScience"
        date="October 12,2025"
        title="The Perfect Technique to Launch Rocket"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo repudiandae odio magni, magnam eius officiis at quaerat suscipit nemo dignissimos voluptate hic recusandae ea vero tenetur nobis est, a in?"
        />
        <HomepageBlog
        image={Webassets.person1}
        name="Sagar Sylada"
        tag="@RocketScience"
        date="October 12,2025"
        title="The Perfect Technique to Launch Rocket"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo repudiandae odio magni, magnam eius officiis at quaerat suscipit nemo dignissimos voluptate hic recusandae ea vero tenetur nobis est, a in?"
        />
        <HomepageBlog
        image={Webassets.person1}
        name="Sagar Sylada"
        tag="@RocketScience"
        date="October 12,2025"
        title="The Perfect Technique to Launch Rocket"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo repudiandae odio magni, magnam eius officiis at quaerat suscipit nemo dignissimos voluptate hic recusandae ea vero tenetur nobis est, a in?"
        />
        <HomepageBlog
        image={Webassets.person1}
        name="Sagar Sylada"
        tag="@RocketScience"
        date="October 12,2025"
        title="The Perfect Technique to Launch Rocket"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo repudiandae odio magni, magnam eius officiis at quaerat suscipit nemo dignissimos voluptate hic recusandae ea vero tenetur nobis est, a in?"
        />
      </div>
      <div className='w-full bg-(--bg-primary) py-20 px-30 flex items-center gap-10 justify-start'>
        <div className='flex flex-col items-start w-4/5'>
          <p className='bg-(--text-button) py-2 px-4 rounded-sm'>Your Gateway to In-Depth Information</p>
          <h1 className='text-6xl'>Unlock Valuable Knowledge with FutureTech's Resources</h1>
        </div>
        <HomepageButton text="View All Resources" icon={Webassets.arrowMark}/>
      </div>
      <div className=''>

      </div>
    </section>
  )
}

export default Homepage
