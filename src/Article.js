import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Article() {
  const [articledatas, setArticledatas] = useState({});
  const param = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/articles/${param}`)
      .then((res) => {
        setArticledatas(res.data);
      });
  }, [param]);

  const deletarticle = () => {
    Swal.fire({
      title: 'مطمئنی می‌خوای حذفش کنی؟',
      text: "این عمل قابل بازگشت نیست!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله، حذف کن!',
      cancelButtonText: 'نه، بی‌خیال!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3001/articles/${param}`).then(() => {
          Swal.fire('حذف شد!', 'مقاله با موفقیت حذف شد.', 'success');
          navigate('/');
        });
      }
    });
  };

  return (
    <div className='page'>
      <img src={articledatas.image} alt="" />
      <h1>{articledatas.title}</h1>
      <button onClick={deletarticle}>حذف مقاله</button>
      <Link to={`/edditarticle/${param}`}>ویرایش مقاله</Link>
    </div>
  );
}