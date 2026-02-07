import React from 'react'

export default function Move() {
    const moveHandler = () => {
        alert("Mouse move event fired")
        console.log("Mouse move event fired!")
    }


  return (
    <>
     <p onMouseMove={moveHandler} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque eius minima, incidunt earum illo repellat? Voluptatibus ab, necessitatibus earum blanditiis voluptates laborum inventore repellat placeat omnis suscipit aspernatur! Nam.</p> 
    </>
  )
}
