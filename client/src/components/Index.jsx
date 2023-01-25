import '../App.css'
import { Link } from "react-router-dom";
import React from "react";


const Index = () => {
    return (
        <div className='indexContainer'>
            <div>
                <img className='trick bg-gradient-to-t opacity-75' src="/images/invert.jpg" alt="andrecht invert by harrison bowman" />
            </div>

            <div className='enterApp'>
                <h2 className="font-mono">welcome to built2shred!</h2>
                <Link className='font-mono text-slate-600 hover:scale-125 duration-700 animate-pulse' to={`/display`}>enter application</Link>
            </div>
        </div>

)
}

export default Index