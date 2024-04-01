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


function EditAuthor() {
   let params = useParams()//this will return a object
  let [initialValues,setValues] = useState({
    authorName:'',
    birthDate:'',
    biography:''
  })


  let navigate = useNavigate()// this will return a function

  const getUserData = async()=>{
    let {id} = params
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status===200)
      {
        setValues({
          authorName:res.data.authorName,
          birthDate:res.data.birthDate,
          biography:res.data.biography
        })
      }
  } catch (error) {
      console.log(error)
  }
  }

  let formik = useFormik({
    initialValues:initialValues,
    validationSchema:Yup.object({
      authorName:Yup.string().required('Name is required').max(20,'Name can not exceed 20 characters').min(3,'Name can not be shorter than 3 leters'),
      birthDate:Yup.date().required('Date is required'),
      biography:Yup.string().required('Biography is required')
    }),
    enableReinitialize:true,
    onSubmit:async (values)=>{
      let {id} = params
      values.id = id
    try {
        let res = await axios.put(`${API_URL}/${id}`,values)
        if(res.status===200)
          navigate('/author-records')
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
            <Form.Label className="fw-bold">Author Name</Form.Label>
            <Form.Control type="text" id="authorName" name="authorName" onChange={formik.handleChange} value={formik.values.authorName} onBlur={formik.handleBlur}/>
            {formik.touched.authorName && formik.errors.authorName ? (<div style={{color:"red"}}>{formik.errors.authorName}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3"
            style={{ width: "30%", marginLeft: "10rem" }}>
            <Form.Label className="fw-bold">Birth Date</Form.Label>
            <Form.Control type="date"  id="birthDate" name="birthDate" onChange={formik.handleChange} value={formik.values.birthDate} onBlur={formik.handleBlur}/>
            {formik.touched.birthDate && formik.errors.birthDate ? (<div style={{color:"red"}}>{formik.errors.birthDate}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-3" 
          style={{ width: "30%", marginLeft: "10rem" }}>
            <Form.Label  className="fw-bold">Biography</Form.Label>
            <Form.Control as="textarea" type="text"  id="biography" name="biography" onChange={formik.handleChange} value={formik.values.biography} onBlur={formik.handleBlur}/>
            {formik.touched.biography && formik.errors.biography ? (<div style={{color:"red"}}>{formik.errors.biography}</div>) : null}
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
export default EditAuthor;