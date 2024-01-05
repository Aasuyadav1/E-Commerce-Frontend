import React, { useState } from 'react'
import Hero from './Hero'
import Category from './Category'
import Trending from './Trending'
import Button from './Button'
import Trendbanner from './Trendbanner'
import Desireproduct from './Desireproduct'
import Shopinfo from './Shopinfo'

function Home() {
 
  return (
    <div>
      <Hero/>
      <Category/>
      <Trending/>
      <Button title='Load More' class="mx-auto px-[50px] uppercase mt-[80px] font-semibold py-[8px] duration-300 ease-linear  hover:bg-black hover:text-white "/>
      <Trendbanner/>
      <Desireproduct/>
      <Shopinfo/>
    </div>
  )
}

export default Home