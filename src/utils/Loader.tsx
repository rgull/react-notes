import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='spinner'>
    <RotatingLines
      strokeColor="black"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  </div>
  )
}

export default Loader
