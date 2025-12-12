import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <button className='bg-black text-white rounded-2xl p-2' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
