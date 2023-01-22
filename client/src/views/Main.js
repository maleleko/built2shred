import React, {useState, useEffect} from 'react'
import Display from '../components/Display'
import axios from 'axios'



const Main = () => {

    const [board, setBoard] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/display')
        .then((res)=>{
            setBoard(res.data)
        }).catch((err)=>{
            console.log('ERROR--------------',err)
        })
    }, [])

  return (
    <div>
        <Display board={board} setBoard={setBoard}/>
    </div>
  )
}

export default Main