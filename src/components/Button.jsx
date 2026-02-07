import React from 'react'

export default function Button() {

    const handleClick = () => console.log(Math.round(Math.random() * 10))
  return (
    <>
     <button onClick={handleClick} > 
        Click
    </button> 
    </>
  )
}
