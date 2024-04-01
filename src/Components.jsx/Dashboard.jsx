import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { API_URL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Footer from "./footer";


function Dashboard() {
  let navigate = useNavigate();
  let [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    getAxios();
  }, []);

  // Function to fetch data from the API
  let getAxios = async () => {
    try {
      let res = await axios.get(API_URL);
      if (res.status === 200) {
        setAxiosData(res.data);
      }
    } catch (error) {
      toast.error("Error fetching data from the API");
    }
  };

  // Function to handle userData deletion
  let handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success("Data Deleted Successfully!");
        getAxios();
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <Table responsive bordered striped hover className="overflow-auto mt-4" >
          <thead style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px' }}>
            <tr>
              <th className="text-center fw-bold">#</th>
              <th className="text-center fw-bold">Title</th>
              <th className="text-center fw-bold">Author</th>
              <th className="text-center fw-bold">ISBN Number</th>
              <th className="text-center fw-bold">Publication Date</th>
              <th className="text-center fw-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {axiosData.map((e, i) => {
              console.log(e);
              return (
                <tr key={i}>
                  {/* Displaying userData data */}
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{e.title}</td>
                  <td className="text-center">{e.author}</td>
                  <td className="text-center">{e.isbn}</td>
                  <td className="text-center">{e.publication}</td>
                  <td className="text-center">
                    <Button
                      variant="info"
                      className="mt-2"
                      onClick={() => navigate(`/edit/${e.id}`)}
                    >
                      <b>Edit</b>
                    </Button>
                    <br className="d-md-none" />
                    <Button
                      variant="danger"
                      className="mt-2 mx-2"
                      onClick={() => handleDelete(e.id)}
                    >
                      <b>Delete</b>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;