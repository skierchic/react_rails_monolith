import React from 'react'
import { Link } from 'react-router';

const CerealTile = (props) => {
  return(
    <div>
      <Link to={`/cereals/${props.id}`}>
        <p>{props.name}</p>
      </Link>
      <hr/>
    </div>
  )
}

export default CerealTile;
