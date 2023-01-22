import '../App.css'
import { Link } from "react-router-dom";
import React from "react";


const Index = () => {
    return (
        <div className='indexContainer'>
            <div>
                <img className='trick bg-gradient-to-t' src="/images/invert.jpg" alt="andrecht invert by harrison bowman" />
            </div>

            <div className='enterApp'>
                <h2 className="bg-gradient-to-t">Welcome to Built2Shred!</h2>
                <Link to={`/display`}>enter application</Link>
            </div>
        </div>

)
}

export default Index