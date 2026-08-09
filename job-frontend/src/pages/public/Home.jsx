import React from 'react'
import Hero from '../../components/Hero'
import Choose from '../../components/Choose'
import Categories from '../../components/Categories'
import LatestJobs from '../../components/LatestJobs'


export const Home = () => {
  return (
    <>
        <Hero />
        <Categories />
        <LatestJobs />
        <Choose />
  
    </>
  )
}
