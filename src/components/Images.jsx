import React from 'react'

const Images = ({className, srcImg, altImg}) => {
  return (
   <img className={`${className}`} src={srcImg} alt={altImg} />
  )
}

export default Images