import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


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

    

    return (
        <div className='mainWrapper font-mono'>
            <div className='culture-history'>
                <h2 className='header font-bold text-xl mt-6'>built shredders</h2>
            </div>

            <div className='content-details'>
                <div className='displayed-content'>
                    {list.map((board)=>{
                        return (
                            <div className='a' key={board._id}>
                                <div className='wholeComplete p-10 hover:scale-125 duration-700 opacity-75 hover:opacity-100'> 
                                    <Link className='font-mono text-xs' to={`/setup/${board._id}`}>
                                    <div className='wholeComplete'>
                                        <img className='board' src={board.boardBrandImage} width='125rem' height='125rem' alt={board.boardBrand}/>
                                        <img className='trucks' src={board.trucksbrandImage} width='125rem' height='125rem' alt={board.trucks} />
                                        <img className='wheels' src={board.wheelsBrandImage} width='125rem' height='125rem' alt={board.wheels} />
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Display