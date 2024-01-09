import React, { useState } from 'react'
import Hero from './Hero'
import Category from './Category'
import Trending from './Trending'

import Trendbanner from './Trendbanner'
import Desireproduct from './Desireproduct'
import Shopinfo from './Shopinfo'

function Home() {
 
  return (
    <div>
      <Hero/>
      <Category/>
      <Trending/>
      
      <Trendbanner/>
      <Desireproduct/>
      <Shopinfo/>
    </div>
  )
}

export default Home