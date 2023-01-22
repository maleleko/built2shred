import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'
import Granim from 'granim'




const OneBoard = () => {


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
                    ['#ffffff', '#7C8FA1'],
                    ['#ffffff', '#5A5C6A'],
                    // ['#ffffff', '#434343'],
                    ['#ffffff', '#142432']
                ],
                transitionSpeed: 1500,
            }
        }
    })
}, [])


const [boardImages, setBoardImages] = useState('')
const [trucksImages, setTrucksImages] = useState('')
const [wheelsImages, setWheelsImages] = useState('')
const [boardDetails, setBoardDetails] = useState('')


const {id} = useParams()
const navigate = useNavigate()


useEffect(()=>{
    axios.get(`http://localhost:8000/setup/${id}`)
    .then((res)=>{
        console.log('UPDATE FORM ---------------',res.data)
        setBoardDetails(res.data)
        setBoardImages((`${(res.data?.boardBrandImage)}`))
        setTrucksImages((`${(res.data?.trucksbrandImage)}`))
        setWheelsImages((`${(res.data?.wheelsBrandImage)}`))

    }).catch((err)=>{
        console.log('ERRRRRRR----------', err)
    })
    }, [])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/setup/delete/${id}`)
        .then((res)=>{
            navigate('/display')
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div className='bloc-logo'> 
    <canvas id='logo-canvas' />
    <div className="logo-mask">
    
    <div className='mainWrapper font-mono text-sm'>
        <div className='content-details text-stone-700'>
            <div className='grid grid-cols-5 gap-1'>
                <div className='gridLeft col-start-2 col-end-3'>
                    <div>
                        <p className='-rotate-3'>graphic</p>
                        <p className='solidLine -rotate-3'></p>
                        <p className='-rotate-3'>{boardDetails.boardBrand} </p>
                    </div>
                    <div>
                        <p className='rotate-3'>trucks</p>
                        <p className='solidLine -rotate-3'></p>
                        <p className='rotate-3'>{boardDetails.trucks} </p>
                    </div>
                </div>

                <div className='detailsSize' >
                    <p className='-rotate-3'>size | {boardDetails.size}</p>
            
                <div className='boardWrapper col-start-3'>
                    <div className='wholeComplete'>
                        {/* {boardImages} */}
                        <img className='board' src={boardImages} width='150rem' height='150rem' alt="board graphic" />
                        <img className='trucks'src={trucksImages} width='150rem' height='150rem' alt="trucks graphic" />
                        <img className='wheels' src={wheelsImages} width='150rem' height='150rem' alt="wheels graphic" />
                    </div>
                </div>
                <p className='rotate-3'>grip | {boardDetails.griptape}</p>
                </div>

                <div className='gridRight col-start-4 col-end-5'>
                    <div>
                        <p className='rotate-3'>wheels</p>
                        <p className='solidLine -rotate-3'></p>
                        <p className='rotate-3'>{boardDetails.wheels} </p>
                    </div>
                    <div>
                        <p className='-rotate-3'>bearings</p>
                        <p className='solidLine -rotate-3'></p>
                        <p className='-rotate-3'>{boardDetails.bearings} </p>
                    </div>
                </div>

            </div>
        </div>
                <div className='buttons'>
                <Link to={`/setup/update/${boardDetails._id}`} className='editbtn text-emerald-500 hover:scale-150 animate-pulse duration-700'>edit</Link>
                <p> | </p>
                <button className='delbtn text-red-500 hover:scale-150 animate-pulse duration-700 'onClick={deleteHandler}>delete</button>
                </div>
                </div>
    </div>
    </div>
    )
}


export default OneBoard