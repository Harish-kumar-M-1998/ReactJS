import React from 'react';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const API_URL = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint

const AddAuthor = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      authorName: '',
      birthDate: '',
      biography: '',
    },
    validationSchema: Yup.object({
      authorName: Yup.string()
        .required('Name is required')
        .max(20, 'Name can not exceed 20 characters')
        .min(3, 'Name can not be shorter than 3 letters'),
      birthDate: Yup.date().required('Date is required'),
      biography: Yup.string().required('Biography is required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(API_URL, values);

        if (res.status === 201) {
          console.log('Author added successfully:', res.data);
          navigate('/author-records');
        }
      } catch (error) {
        console.error('Error adding author:', error);
      }
    },
  });

  return (
    <>
      <NavBar />
      <div className="mt-4">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" style={{ width: '30%', marginLeft: '10rem' }}>
            <Form.Label className="fw-bold">Author Name</Form.Label>
            <Form.Control
              type="text"
              id="authorName"
              name="authorName"
              onChange={formik.handleChange}
              value={formik.values.authorName}
              onBlur={formik.handleBlur}
            />
            {formik.touched.authorName && formik.errors.authorName ? (
              <div style={{ color: '#FF5733' }}>{formik.errors.authorName}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: '30%', marginLeft: '10rem' }}>
            <Form.Label className="fw-bold">Birth Date</Form.Label>
            <Form.Control
              type="date"
              id="birthDate"
              name="birthDate"
              onChange={formik.handleChange}
              value={formik.values.birthDate}
              onBlur={formik.handleBlur}
            />
            {formik.touched.birthDate && formik.errors.birthDate ? (
              <div style={{ color: 'red' }}>{formik.errors.birthDate}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" style={{ width: '30%', marginLeft: '10rem' }}>
            <Form.Label className="fw-bold">Biography</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              id="biography"
              name="biography"
              onChange={formik.handleChange}
              value={formik.values.biography}
              onBlur={formik.handleBlur}
            />
            {formik.touched.biography && formik.errors.biography ? (
              <div style={{ color: 'red' }}>{formik.errors.biography}</div>
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
};

export default AddAuthor;