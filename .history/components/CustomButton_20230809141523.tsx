'use client'

import Image from 'next/image'



const CustomButton = () => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={() => {}}
    >
      <span className={`flex-1`}>
        title
      </span>
    </button>
  )
}

export default CustomButton