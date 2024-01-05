import React from 'react'

function Shopinfo() {
  const data = [
    {
      id:1,
      title:'Free Shipping',
      icon:'ri-truck-line',
      descriptions:'Get complimentary ground shipping on every order. Donot love it? Send it back, on us.'
    },
    {
      id:2,
      title:'Free Returns',
      icon:'ri-verified-badge-line',
      descriptions:'Free returns within 10 days, please make sure the items are in undamaged condition.'
    },
    {
      id:3,
      title:'Support Online',
      icon:'ri-chat-1-line',
      descriptions:'We support customers 24/7, send questions we will solve for you immediately.'
    }
  ]
  return (
    <div className='flex justify-center items-center mt-32 gap-10 flex-col px-4 md:flex-row'>
        {
          data.map((cur)=>
            <div key={cur.id} className='flex flex-col justify-center items-center'>
              <i className={`${cur.icon} text-center text-5xl`}></i>
              <p className='text-center text-2xl font-medium mt-4'>{cur.title}</p>
              <p className='mt-4 text-center opacity-90'>{cur.descriptions}</p>
            </div>
          )
        }
    </div>
  )
}

export default Shopinfo