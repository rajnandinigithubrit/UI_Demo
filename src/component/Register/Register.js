import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate()

  const handleName = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleMobile = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/[^0-9]/g, '');
    const truncatedInput = sanitizedInput.slice(0, 10);
    setMobile(truncatedInput);
  };

  const handleRegister = () => {
    if (!username.trim()) {
      alert('Please enter a username');
      return;
    }

    if (!email.trim()) {
      alert('Please enter an email');
      return;
    }


    if (!password.trim()) {
      alert('Please enter a password');
      return;
    }

    if (!mobile || isNaN(mobile) || mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    const res = { username, email, password, mobile }
    console.log('Registration successful:', res);
    localStorage.setItem("user", JSON.stringify(res))
    navigate('/Admin')
  };

  return (
    <>
      <Container>
        <Row>
          <Col sm={12}>

            <div className='main-container'>

              <form>
                <h4>Login</h4>
                <div className='form-container'>
                  <div className='inputes'>
                    <label>UserName</label>
                    <input type='text' value={username} onChange={handleName} placeholder='Enter Username' />
                  </div>
                  <div className='inputes'>
                    <label>Email</label>
                    <input type='text' value={email} onChange={handleEmail} placeholder='Enter Email' />
                  </div>

                  <div className='inputes'>
                    <label>Password</label>
                    <input type='password' value={password} onChange={handlePassword} placeholder='Enter Password' />
                  </div>
                  <div className='inputes'>
                    <label>Password</label>
                  <input  type='text' value={mobile}  onChange={handleMobile}  placeholder='Enter Mobile' />
                  </div>
                  <div className='btn-submit'>
                    <span onClick={handleRegister}>Register</span>
                  </div>
                </div>
              </form>

            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
