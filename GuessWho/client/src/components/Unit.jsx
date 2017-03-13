import React from 'react'

const Unit = ({
  index,
  data,
  onClick,
}) => (

  <div
  className = 'unit'
  data = {data}
  onClick = {onClick}>
    
      <li>{data.name},</li>
      <li>{data.hair},</li>
      <li>{data.sex}.</li>

  </div>
    )

export default Unit