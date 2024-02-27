import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Dashborad/Dashboard.css';

function Dashaborad() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = localStorage.getItem('user');
    const result = JSON.parse(response);
    setData(result);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='head'>
              Welcome in Admin
            </div>
            {data ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.password}</td>
                    <td>{data.mobile}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div>No data found</div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashaborad;
