import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Form, Button } from 'react-bootstrap';
import Mynavbar from './Mynavbar';

export default function Edditarticle() {
  const param = +(useParams().id);
  const [edditarticledata, setEdditarticledata] = useState(null);

  useEffect(() => {
    console.log("id param:", param);
    axios.get(`http://localhost:3001/articles/${param}`)
      .then((res) => {
        console.log('Data from server:', res.data);
        setEdditarticledata(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        Swal.fire('خطا', 'مقاله پیدا نشد یا مشکلی در دریافت داده وجود دارد', 'error');
      });
  }, [param]);

  const submiteddithandler = (e) => {
    setEdditarticledata({ ...edditarticledata, [e.target.name]: e.target.value });
  };

  const formhedditandler = () => {
    axios.put(`http://localhost:3001/articles/${param}`, edditarticledata)
      .then(() => {
        Swal.fire('انجام شد', 'مقاله با موفقیت ویرایش شد', 'success');
      })
      .catch(() => {
        Swal.fire('خطا', 'مشکلی در ویرایش مقاله وجود دارد', 'error');
      });
  };

  if (!edditarticledata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Mynavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={submiteddithandler}
              value={edditarticledata.title || ''}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWritter">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              type="text"
              name="writter"
              onChange={submiteddithandler}
              value={edditarticledata.writter || ''}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDesc">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              type="text"
              name="desc"
              onChange={submiteddithandler}
              value={edditarticledata.desc || ''}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              type="text"
              name="category"
              onChange={submiteddithandler}
              value={edditarticledata.category || ''}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              type="text"
              name="image"
              onChange={submiteddithandler}
              value={edditarticledata.image || ''}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formReadingTime">
            <Form.Label>مدت زمان</Form.Label>
            <Form.Control
              type="number"
              name="readingtime"
              onChange={submiteddithandler}
              value={edditarticledata.readingtime || ''}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={formhedditandler}>
            ذخیره تغییرات
          </Button>
        </Form>
      </div>
    </div>
  );
}