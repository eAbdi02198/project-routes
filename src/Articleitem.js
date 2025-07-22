import React from 'react'
import './Article.css'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Articleitem({id,image,title,desc,writter,category,readingTime}) {
  return (
    <div>
    <Card >
<Card.Img variant="top" src={image} />
<Card.Body>
  <Card.Title>{title}</Card.Title>
  <Card.Text>
   {desc}-{category}-{writter}-{readingTime}
  </Card.Text>
<Link to={`/article/${id}`} className='man'>خرید دوره</Link>
</Card.Body>
</Card>
</div>
  )
}
