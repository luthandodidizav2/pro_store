import { APPNAME } from '@/lib/constants'
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='border-t'>
        <div className="p-5 flex justify-center items-center">
            {currentYear} {APPNAME}. All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer