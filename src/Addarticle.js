import React, { useState } from 'react'
import './Addarticle.css'
import Mynavbar from './Mynavbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function Addarticle() {
let [formdata,setFormdata]=useState({})
const submithandler=(e)=>{
setFormdata({...formdata,[e.target.name]:e.target.value})
}
  const navi=useNavigate()
  const formhandler = () => {
    Swal.fire({
      title: "مقاله ارسال شود؟",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "بله، ارسال کن",
      denyButtonText: "خیر",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:3001/articles", formdata).then(() => {
          Swal.fire("انجام شد!", "مقاله با موفقیت ساخته شد.", "success");
          navi("/")
        });
      } else if (result.isDenied) {
        Swal.fire("لغو شد", "ارسال مقاله لغو شد", "info");
      }
    });
  };
  return (
    <div>
      <Mynavbar></Mynavbar>
<div className="form-container">
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>عنوان مقاله</Form.Label>
        <Form.Control type="text" placeholder="عنوان مقاله"  name="title" onChange={submithandler} value={formdata.title}/>
     

        <Form.Label>نویسنده مقاله</Form.Label>
        <Form.Control type="text" placeholder="نویسنده مقاله"  name="writter" onChange={submithandler} value={formdata.writter}/>

        <Form.Label>توضیح کوتاه</Form.Label>
        <Form.Control type="text" placeholder="توضیح کوتاه"  name="desc" onChange={submithandler} value={formdata.desc}/>

        <Form.Label>موضوع مقاله</Form.Label>
        <Form.Control type="text" placeholder="موضوع مقاله"  name="category" onChange={submithandler} value={formdata.category}/>
     
        <Form.Label>عکس مقاله</Form.Label>
        <Form.Control type="text" placeholder="عکس مقاله"  name="image" onChange={submithandler} value={formdata.image}/>
     
        <Form.Label>مدت زمان</Form.Label>
        <Form.Control type="number" placeholder="مدت زمان"  name="readingtime" onChange={submithandler} value={formdata.readingtime} />
     
     
     
      </Form.Group>

   
      <Button variant="primary" type="button" onClick={formhandler}>
       ساخت مقاله
      </Button>
    </Form>
</div>
    </div>
  )
}
