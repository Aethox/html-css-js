// import Head from 'next/head'

import MainHeader from "@/components/MainHeader";
import MainTitle from "@/components/MainTitle";
import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Home() {

  const [showComponent, setShowComponent] = useState(false)

  const toggleComponent = () => {
    setShowComponent(!showComponent)
  }

  return (
    <>
      <MainHeader>
        <button onClick={toggleComponent}>Toggle Title</button>
        {
          showComponent
          ? <MainTitle text = 'Titulo primario' />
          : null
        }
      
      </MainHeader>
     <h1 >Hola Mundo!</h1>
     
     <NavBar/>


    </>
  )
}
