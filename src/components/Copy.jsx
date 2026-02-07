import React from 'react'

export default function Copy() {

    const copyHandler = () => {
        console.log("Stop stealing my content");
    }


  return (
    <>
      <p onCopy={copyHandler} >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus harum quam reiciendis neque illo, quia, molestias saepe, officiis at placeat temporibus iure velit excepturi ea mollitia officia iste? Doloremque, asperiores?
      </p>
    </>
  )
}
