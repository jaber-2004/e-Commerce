import React, { Children } from 'react'

const Flex = ({className, children}) => {
  return (
    <div className={`flex items-center ${className}`}>{children}</div>
  )
}

export default Flex