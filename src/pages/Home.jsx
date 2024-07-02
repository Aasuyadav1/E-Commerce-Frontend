import React, { useState } from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Trending from '../Components/Trending'
import Followus from '../Components/Followus'
import Trendbanner from '../Components/Trendbanner'
import Desireproduct from '../Components/Desireproduct'
import Shopinfo from '../Components/Shopinfo'


function Home() {
 
  return (
    <div>
      
      <Hero/>
      <Category/>
      <Trending/>
      
      <Trendbanner/>
      <Desireproduct/>
      <Shopinfo/>
      <Followus/>
    </div>
  )
}

export default Home