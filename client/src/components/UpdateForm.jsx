import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'
import '../App.css'
import boarddata from '../services/boarddata'
import trucksdata from '../services/trucksdata'
import wheeldata from '../services/wheeldata'
import Granim from 'granim'

const UpdateForm = () => {

    // states
    const [boardState, setBoardState] = useState('')
    const [truckState, setTruckState] = useState('')
    const [wheelState, setWheelState] = useState('')


    const [boardImages, setBoardImages] = useState('')
    const [trucksImages, setTrucksImages] = useState('')
    const [wheelsImages, setWheelsImages] = useState('')

    const [boardDetails, setBoardDetails] = useState('')

    const [name, setName] = useState('')
    const [boardBrand, setBoardBrand] = useState('')
    const [size, setSize] = useState('')
    const [griptape, setGriptape] = useState('')
    const [trucks, setTrucks] = useState('')
    const [wheels, setWheels] = useState('')
    const [bearings, setBearings] = useState('')


    // use params
    const {id} = useParams()

    // errors
    const [errors, setErrors] = useState({})

    // nav
    const navigate = useNavigate()


// onChange functions

    const changeBoard = (e) => {
    const selectedBoardId = e.target.value;
    const selectedBoardState=boarddata.filter((d)=>d.id===selectedBoardId)[0];
    setBoardState(selectedBoardState);
    console.log('changing board..')
}

const changeTrucks = (e) => {
    const selectedTrucksId = e.target.value
    const selectedTruckState=trucksdata.filter((t)=>t.id===selectedTrucksId)[0]
    setTruckState(selectedTruckState)
    console.log('changing trucks...')
}

const changeWheels = (e) => {
    const selectedWheelsId = e.target.value
    const selectedWheelsState=wheeldata.filter((w)=>w.id===selectedWheelsId)[0]
    setWheelState(selectedWheelsState)
    console.log('changing wheels...')
}

useEffect(()=> {
    axios.get(`http://localhost:8000/setup/${id}`)
    .then((res)=>{
        console.log('UPDATE FORM ---------------',res.data)
        setBoardDetails(res.data)
        setName(res.data.name)
        setBoardBrand(res.data.boardBrand)
        setSize(res.data.size)
        setGriptape(res.data.griptape)
        setTrucks(res.data.trucks)
        setWheels(res.data.wheels)
        setBearings(res.data.bearings)
        setBoardImages((`${(res.data.boardBrandImage)}`))
        setTrucksImages((`${(res.data.trucksbrandImage)}`))
        setWheelsImages((`${(res.data.wheelsBrandImage)}`))
        boarddata.forEach((board) => {
            if (board.id === res.data.boardBrand) {
                setBoardState(board)
            }
        })
        trucksdata.forEach((trucks) => {
            if (trucks.id === res.data.trucks) {
                setTruckState(trucks)
            }
        })
        wheeldata.forEach((wheels) => {
            if (wheels.id === res.data.wheels) {
                setWheelState(wheels)
            }
        })

    }).catch((err)=>{
        console.log('ERRRRRRRRR----------', err)
    })
}, [])



  // submit handler
const submitHandler = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/setup/updatesetup/${id}`, {
    name,
    boardBrand,
    'boardBrandImage':boardState.image, 
    size,
    griptape,
    trucks,
    'trucksbrandImage':truckState.image,
    wheels,
    'wheelsBrandImage':wheelState.image,
    bearings,
    }).then((res)=>{
    navigate('/display')
    }).catch((err)=>{
    console.log('ERRRRRRR----------', err)
    setErrors(err.response.data.errors)
    })
}


    //background effect
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
    <div className='header'>
    <h2 className='header font-bold text-xl mt-6 text-stone-600'><p className=' text-rose-400'>re:</p>define your style</h2>
    </div>
    <div className='content-details'>
        <form onSubmit={submitHandler}>

            <div className='hover:scale-110 duration-700 w-56' >
                {/* name selection */}
                <label className='sillyStyling text-stone-600 text-xs'>name <p className='text-xs'>|optional</p></label>
                <input className='rounded-3xl border bg-inherit border-indigo-400 text-slate-600' value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>


        <div className="grid gird-cols-5 gap-1">

        <div className="gridLeft col-start-2 col-end-3" >
            <div className='info hover:scale-110 duration-700 -rotate-3'>
                {/* graphic select */}
                <label className='text-stone-600'>graphic</label>
                <select className='rounded-3xl border-none border-transparent border-indigo-400 text-center bg-inherit text-slate-600' value={boardBrand} onChange={(e)=>setBoardBrand(e.target.value)} onClick={changeBoard} >
                    {boarddata.map((d) => (
                    <option key={d.id} value={d.id} > {d.value} </option>))}
                </select>
                {errors.boardBrand &&  <p className='w-40 text-rose-400'>{errors.boardBrand.message}</p>}
            </div>

            <div className='info hover:scale-110 duration-700 rotate-3'>
                {/* griptape select */}
                <label className='text-stone-600'>griptape</label>
                <select className='bg-inherit rounded-3xl border-none border-transparent border-indigo-400 text-center text-slate-600' value={griptape} onChange={(e)=>setGriptape(e.target.value)}>
                    <option>choose grip</option>
                    <option value="jessup">jessup</option>
                    <option value="MOB">MOB</option>
                    <option value="steelo">steelo</option>
                </select>
                {errors.griptape &&  <p className=' w-40 text-rose-400'>{errors.griptape.message}</p>}
            </div>
        </div>

        <div className="detailsSize">
          {/* size select */}
        <div className='info hover:scale-110 duration-700' >
            <label className='text-stone-600'>size</label>
            <select className='rounded-3xl border-none border-transparent border-indigo-400 text-center bg-inherit text-slate-600' value={size} onChange={(e)=>setSize(e.target.value)}>
                <option value="">choose width</option>
                <option value="8.25">8.25</option>
                <option value="8.5">8.5</option>
                <option value="8.75">8.75</option>
            </select>
            {errors.size &&  <p className='w-40 text-rose-400 transition: transform'>{errors.size.message}</p>}
            </div>

            {/* BOARD IMAGE STATE */}
            <div className="boardWrapper col-start-3">
                <div className='wholeComplete col-start-3'>
                        
                        <img className='board' src={boardState?.image} width='125rem' height='125rem' alt="building a board" />
                        <img  className='trucks' src={truckState?.image} width='125rem' height='125rem' alt='trucks' />
                        <img className='wheels' src={wheelState?.image} width='125rem' height='125rem' alt='wheels' />
                </div>
            </div>
            <div className='info hover:scale-110 duration-700'>
                {/* bearrings select */}
                <label className='text-stone-600'>bearings</label>
                <select className='rounded-3xl border-none border-transparent border-indigo-400 text-center bg-inherit text-slate-600' value={bearings} onChange={(e)=>setBearings(e.target.value)}>
                    <option>choose bearings</option>
                    <option value="bones bearings">bones</option>
                    <option value="bronson">bronson</option>
                    <option value="cortina">cortina</option>
                </select>
                {errors.bearings &&  <p className='w-40 text-rose-400'>{errors.bearings.message}</p>}
            </div>
        </div>


        <div className="gridRight col-start-4 col-end-5">
            <div className='info hover:scale-110 duration-700 rotate-3'>
                {/* trucks select */}
                <label className='text-stone-600'>trucks</label>
                <select className='rounded-3xl border-none border-transparent border-indigo-400 text-center bg-inherit text-slate-600' value={trucks} onChange={(e)=>setTrucks(e.target.value)} onClick={changeTrucks}>
                    {trucksdata.map((t)=>(
                    <option key={t.id} value={t.id}> {t.value} </option>))}
                </select>
                {errors.trucks &&  <p className='w-40 text-rose-400'>{errors.trucks.message}</p>}
            </div>

            <div className='info hover:scale-110 duration-700 -rotate-3'>
                {/* wheels select */}
                <label className='text-stone-600'>wheels</label>
                <select className='rounded-3xl border-none border-transparent border-indigo-400 text-center bg-inherit text-slate-600' value={wheels} onChange={(e)=>setWheels(e.target.value)} onClick={changeWheels}>
                    {wheeldata.map((w)=>(
                    <option key={w.id} value={w.id}> {w.value} </option>
                    ))}
                </select>
                {errors.wheels &&  <p className='w-40 text-rose-400'>{errors.wheels.message}</p>}
            </div>
        </div>

        </div>
        <div className='buttons2 mt-4'>
        <button className=' text-emerald-500 hover:scale-150 animate-pulse duration-700 ml-14'>re:build</button>
        </div>
    </form>
    </div>
</div>
</div>
</div>
)
}

export default UpdateForm