import React, {Fragment, useEffect} from 'react'
import {Menu, Transition} from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import Granim from 'granim'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {


    return (
        <div className='nav'>
            <div className='w-100 h-20 flex justify-between items-center px-8 font-mono font-bold bg-inherit text-stone-600'>
                <ul className='flex items-center bg-inherit'>
                    <li className='p-4 transition duration-300 hover:text-indigo-400' ><NavLink to='/display'>home</NavLink></li>
                    <li className='p-4'>
                        <Menu as='div' className='relative inline-block text-left'>

                            <Menu.Button className='abtn inline-flex transition duration-300 hover:text-indigo-400 bg-inherit'>
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

                                    <Menu.Items className="absolute mt-2 flex flex-col divide-gray-100 rounded-md bg-inherit">
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