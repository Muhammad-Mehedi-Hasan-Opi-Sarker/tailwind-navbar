import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open,setOpen]=useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 4, name: 'Coupons', link: '/coupons'},
        { id: 5, name: 'Contact', link: '/cantact'},
    ]
    return (
            <nav className='bg-purple-400'>
                <div onClick={()=>setOpen(!open)} className='w-8 h-8 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`md:flex justify-center absolute p-5 md:static bg-purple-400	 w-full duration-500 ease-in ${open ? 'top-6':'top-[-160px]'}`}>
                    {
                        routes.map(route=><Link
                        key={route.id}
                        route={route}
                        ></Link>)
                    }
                </ul>
            </nav>
    );
};

export default Navbar;