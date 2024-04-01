import React from "react";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { API_URL } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AddBook() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publication: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      author:Yup.string().required('Name is required')
      .max(20, 'Name can not exceed 20 characters')
      .min(3, 'Name can not be shorter than 3 letters'),
      isbn: Yup.number().required('ISB Number is required'),
      publication: Yup.date().required('Publication Date is required'),
    }),
    onSubmit: async (values) => {
      try {
        // Axios POST request to create a new data
        const res = await axios.post(API_URL, values);

        // Check if the data was created successfully (status code 201)
        if (res.status === 201) {
          toast.success("Data Created Successfully");
          navigate("/dashboard");
        }
      } catch (error) {
        // Handle any errors during the data creation process
      }
    },
  });

  return (
    <>
      <NavBar />

      <div className="mt-4">
        {/* Form for creating a new data */}
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" style={{ width: "50%", marginLeft: "10rem" }}>
            <Form.Label className="fw-bold">Title</Form.Label>
            <Form.Control
              style={{ width: "50%" }}
              type="text"
              {...formik.getFieldProps('title')}
            />
            {formik.touched.title && formik.errors.title ? (
              <div style={{ color: 'red' }}>{formik.errors.title}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "50%", marginLeft: "10rem" }}>
            <Form.Label className="fw-bold">Author</Form.Label>
            <Form.Control
              style={{ width: "50%" }}
              type="text"
              {...formik.getFieldProps('author')}
            />
            {formik.touched.author && formik.errors.author ? (
              <div style={{ color: 'red' }}>{formik.errors.author}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "50%", marginLeft: "10rem" }}>
            <Form.Label className="fw-bold">ISB Number</Form.Label>
            <Form.Control
              style={{ width: "50%" }}
              type="number"
              {...formik.getFieldProps('isbn')}
            />
            {formik.touched.isbn && formik.errors.isbn ? (
              <div style={{ color: 'red' }}>{formik.errors.isbn}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: "50%", marginLeft: "10rem" }}>
            <Form.Label className="fw-bold">Publicaion Date</Form.Label>
            <Form.Control
              style={{ width: "50%" }}
              type="date"
              {...formik.getFieldProps('publication')}
            />
            {formik.touched.publication && formik.errors.publication ? (
              <div style={{ color: 'red' }}>{formik.errors.publication}</div>
            ) : null}
          </Form.Group>

          <div className="text-center">
            <Button type="submit" variant="success" className="fw-bold">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddBook;