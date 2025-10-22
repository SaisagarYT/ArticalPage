import React from 'react'
import Webassets from '../assets/Assets'
import HomepageFeatureSubCard from './HomepageFeatureSubCard'

const HomepageFeatureCard = ({title,para,icon}) => {
  return (
    <section className='w-full flex px-30 border-b border-r border-l text-(--text-main) border-(--bg-primary)'>
      <div className='flex flex-1/5 py-30 flex-col items-start border-r mr-10 border-(--bg-primary)  justify-center'>
        <img className='scale-75' src={icon} alt="" />
        <br />
        <h1 className='text-4xl'>{title}</h1>
        <br />
        <p className='text-(--text-secondary)'>{para}</p>
      </div>
      <div className='grid grid-cols-2 py-10 gap-10 flex-1/2'>
        <HomepageFeatureSubCard title="Quality" text="Over 1,000 articles on emerging tech trends and breakthroughs."/>
        <HomepageFeatureSubCard title="Quality" text="Over 1,000 articles on emerging tech trends and breakthroughs."/>
        <HomepageFeatureSubCard title="Quality" text="Over 1,000 articles on emerging tech trends and breakthroughs."/>
        <HomepageFeatureSubCard title="Quality" text="Over 1,000 articles on emerging tech trends and breakthroughs."/>
      </div>
    </section>
  )
}

export default HomepageFeatureCard
