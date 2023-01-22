import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Granim from 'granim'
import NavBar from './NavBar'


const Display = () => {

    
    const [list, setList] = useState([])

    const [boardImages, setBoardImages] = useState('')
    const [trucksImages, setTrucksImages] = useState('')
    const [wheelsImages, setWheelsImages] = useState('')


    useEffect(()=>{
        axios.get('http://localhost:8000/display')
        .then((res)=>{
            setList(res.data)
            setBoardImages((`${res.data?.boardBrandImage}`))
            setTrucksImages((`${(res.data?.trucksbrandImage)}`))
            setWheelsImages((`${(res.data?.wheelsBrandImage)}`))
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    // background effect
    useEffect(()=> {
        new Granim({
            element: "#logo-canvas",
            direction: "radial",
            opacity: [1, 1],
            states: {
                'default-state':{
                    gradients: [
                        ['#ffffff', '#202D3A'],
                        ['#ffffff', '#000000'],
                        ['#ffffff', '#536E8A'],
                        ['#ffffff', '#5A5C6A'],
                        ['#ffffff', '#434343'],
                        ['#ffffff', '#6B646E']
                    ],
                    transitionSpeed: 1200,
                }
            }
        })
    }, [])

    return (

        <div className='bloc-logo'> 
        <canvas id='logo-canvas' />
        <div className="logo-mask">

            <div className='mainWrapper font-mono'>
                <div className='culture-history'>
                    <h2 className='header font-bold text-xl mt-6 text-stone-600'>built shredders</h2>
                </div>

                <div className='content-details'>
                    <div className='displayed-content'>
                        {list.map((board)=>{
                            return (
                                <div className='boarddisplay' key={board._id}>
                                    <div className='wholeComplete p-10 hover:scale-125 duration-700 opacity-75 hover:opacity-100'> 
                                        <Link className='font-mono text-xs' to={`/setup/${board._id}`}>
                                        <div className='wholeComplete'>
                                            <img className='board' src={board.boardBrandImage} width='110rem' height='110rem' alt={board.boardBrand}/>
                                            <img className='trucks' src={board.trucksbrandImage} width='110rem' height='110rem' alt={board.trucks} />
                                            <img className='wheels' src={board.wheelsBrandImage} width='110rem' height='110rem' alt={board.wheels} />
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Display