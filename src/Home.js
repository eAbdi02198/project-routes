import React, { useEffect, useState } from 'react'
import './Home.css'
import Mynavbar from './Mynavbar'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'
import Article from './Article'
import Articleitem from './Articleitem'
export default function Home() {
    let [datas,setDatas]=useState([])
useEffect(()=>{
  
    axios.get("http://localhost:3001/articles")
    .then(function (response) {
    setDatas(response.data)
    })
    .catch(function (error) {
      console.error('خطا:', error);
    });
},[])
  return (
    <div>
      <Mynavbar></Mynavbar>
      <Container>
        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
            {datas.map(data=>{
                return <Col key={data.id}  className='p-3'>
                    <Articleitem {...data}></Articleitem>
                </Col>
            })}
        </Row>
      </Container>
    </div>
  )
}
