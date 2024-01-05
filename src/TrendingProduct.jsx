import React from 'react'
import { data } from './Productdata'


export const trendingProducts = data.filter((cur)=>
    cur.trending ? cur : null
) 
