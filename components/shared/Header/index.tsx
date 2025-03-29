import React from 'react'
import {ShoppingCart,User2Icon} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { APPNAME } from '@/lib/constants'
// import Image from 'next/image'


const Header = () => {
  return (
    <header className='w-full border-b '>
        <div className="flex justify-between items-center max-w-7xl lg:mx-auto p-5 md:px-10 w-full">
            <div className="flex-start">
                <Link href='/' className='flex-start'>
                    {/* <Image src='/images/logo.svg' alt='logo-image' height={48} width={48} priority={true} /> */}
                    <span className="hidden font-bold ml-3 text-2xl lg:block">{APPNAME}</span>
                </Link>
            </div>
            
            <div className="space-x-2">
                <Button asChild variant="ghost">
                    <Link href='/cart'>
                        <ShoppingCart />
                    </Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href='/sign-in'>
                        <User2Icon />
                    </Link>
                </Button>
            </div>
        </div>
        
    </header>
  )
}

export default Header