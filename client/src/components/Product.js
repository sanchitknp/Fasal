import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
return (
    <Link to = {`/playlist/${product._id}`}>
    <Card className = "my-3 p-3 rounded">
      <Card.Title as ="div">
          <strong>{product.name}</strong>
          </Card.Title>
       
    </Card>
    </Link>
)
}

export default Product