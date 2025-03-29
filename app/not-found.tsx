import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-screen'>
        <div className="bg-slate-950 p-4 space-y-4 rounded-2xl text-white font-semibold text-center">

        <h1 className='text-3xl text-red-600'>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link className='capitalize text-blue-300 hover:text-amber-600 duration-300' href="/">Go back to the home page</Link>
        </div>
    </div>
  )
}

export default NotFoundPage