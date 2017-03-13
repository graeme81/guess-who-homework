import React from 'react';
import Unit from './Unit';

const Box = ({
  units,
  onClick
}) => (
  <div className = 'box'>
    {units.map((unit, index, data) =>(
     
      <Unit 
        key = {index}
        data = {data[index]}
        onClick = {onClick}
      />

    )
  )}
  </div>
)

export default Box