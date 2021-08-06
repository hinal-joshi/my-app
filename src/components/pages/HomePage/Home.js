import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjFour} from '../Data'

function Home() {
    return (
        <>
           <HeroSection {...homeObjOne}/> 
           <HeroSection {...homeObjFour}/> 
        </>
    )
}

export default Home
