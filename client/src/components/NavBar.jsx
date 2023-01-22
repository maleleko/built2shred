import React, {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import { NavLink } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='w-100 h-20 flex justify-between items-center px-8 font-mono font-bold'>
                {/* <h1 className='text-2xl font-bold'>b2s</h1> */}
                <ul className='flex items-center'>
                    <li className='p-4 transition duration-300 hover:text-indigo-400' ><NavLink to='/display'>home</NavLink></li>
                    <li className='p-4'>
                        <Menu as='div' className='relative inline-block text-left'>

                            <Menu.Button className='abtn inline-flex transition duration-300 hover:text-indigo-400'>
                                brands
                            </Menu.Button>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-300"
                            enterFrom="transform opacity-0 scale-100"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-100">

                                    <Menu.Items className="absolute mt-2 flex flex-col divide-gray-100 rounded-md bg-white">
                                        <Menu.Item className='transition duration-300 hover:text-violet-400'>
                                            <NavLink to='/brands/boards'>boards</NavLink>
                                        </Menu.Item>
                                        <Menu.Item className='transition duration-300 hover:text-violet-400'>
                                            <NavLink to='/brands/grip'>grip</NavLink>
                                        </Menu.Item>
                                        <Menu.Item className='transition duration-300 hover:text-violet-400'>
                                            <NavLink to='/brands/trucks'>trucks</NavLink>
                                        </Menu.Item>
                                        <Menu.Item className='transition duration-300 hover:text-violet-400'>
                                            <NavLink to='/brands/wheels'>wheels</NavLink>
                                        </Menu.Item>
                                        <Menu.Item className='transition duration-300 hover:text-violet-400'>
                                            <NavLink to='/brands/bearings'>bearings</NavLink>
                                        </Menu.Item>
                                    </Menu.Items>

                                    
                            </Transition>
                        </Menu>
                    </li>
                    <li className='p-4 transition duration-300 hover:text-indigo-400'><NavLink to='/boards/new'>build yours</NavLink></li>
                    {/* <li className='p-4 transition duration-300 hover:text-indigo-400'><NavLink to='/videos'>videos</NavLink></li> FUTURE DEVELOPMENT */}
                    <li className='p-4 transition duration-300 hover:text-indigo-400'><NavLink to='/culture'>culture</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar