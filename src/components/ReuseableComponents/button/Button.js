import React from 'react'
import './button.scss'

function Button({title,handleClick}) {
  return (
    <button className='btn-style' onClick={handleClick}>
      {title}
    </button>
  )
}

export default Button