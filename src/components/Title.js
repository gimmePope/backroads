import React from 'react'

const Title = ({titleP1, titleP2}) => {
  return (
    <div className="section-title">
        <h2>{titleP1} <span>{titleP2}</span></h2>
      </div>
  )
}

export default Title