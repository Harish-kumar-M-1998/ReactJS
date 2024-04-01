import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as Yup from 'yup'


function EditBook() {
   let params = useParams()//this will return a object
  let [initialValues,setValues] = useState({
    title:'',
    author:'',
    isbn:'',
    publication:''
  })


  let navigate = useNavigate()// this will return a function

  const getUserData = async()=>{
    let {id} = params
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status===200)
      {
        setValues({
          title:res.data.title,
          author:res.data.author,
          isbn:res.data.isbn,
          publication:res.data.publication
        })
      }
  } catch (error) {
      console.log(error)
  }
  }

  let formik = useFormik({
    initialValues:initialValues,
    validationSchema:Yup.object({
     title:Yup.string().required('Title is required'),
      author:Yup.string().required('Name is required').max(20,'Name can not exceed 20 characters').min(3,'Name can not be shorter than 3 leters'),
      isbn:Yup.number().required('ISBN is required'),
      publication:Yup.date().required('Publication date is required')
    }),
    enableReinitialize:true,
    onSubmit:async (values)=>{
      let {id} = params
      values.id = id
    try {
        let res = await axios.put(`${API_URL}/${id}`,values)
        if(res.status===200)
          navigate('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }})



  useEffect(()=>{
    getUserData()
  },[])

  return ( <>
      <NavBar />

      <div className="mt-4">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3"
          style={{ width: "30%", marginLeft: "10rem" }} >
            <Form.Label className="fw-bold">Title</Form.Label>
            <Form.Control type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}/>
            {formik.touched.title && formik.errors.title ? (<div style={{color:"red"}}>{formik.errors.title}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3"
          style={{ width: "30%", marginLeft: "10rem" }} >
            <Form.Label className="fw-bold">Author</Form.Label>
            <Form.Control type="text" id="author" name="author" onChange={formik.handleChange} value={formik.values.author} onBlur={formik.handleBlur}/>
            {formik.touched.author && formik.errors.author ? (<div style={{color:"red"}}>{formik.errors.author}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3"
            style={{ width: "30%", marginLeft: "10rem" }}>
            <Form.Label className="fw-bold">ISB Number</Form.Label>
            <Form.Control type="number"  id="isbn" name="isbn" onChange={formik.handleChange} value={formik.values.isbn} onBlur={formik.handleBlur}/>
            {formik.touched.isbn && formik.errors.isbn ? (<div style={{color:"red"}}>{formik.errors.isbn}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" 
          style={{ width: "30%", marginLeft: "10rem" }}>
            <Form.Label  className="fw-bold">Publication</Form.Label>
            <Form.Control type="date"  id="publication" name="publication" onChange={formik.handleChange} value={formik.values.publication} onBlur={formik.handleBlur}/>
            {formik.touched.publication && formik.errors.publication ? (<div style={{color:"red"}}>{formik.errors.publication}</div>) : null}
          </Form.Group>
          <div className="text-center">
          <Button type="submit" variant="success"
              className="fw-bold">
            Submit
          </Button>
          </div>
      </Form>
      </div>
      </>
  );
}
export default EditBook;