import React from 'react'

const RowSection = ({children, className}) => {
  return (
    <div className={`col-12 d-flex ${className}`}>
      {children}
    </div>
  )
}

export default RowSection