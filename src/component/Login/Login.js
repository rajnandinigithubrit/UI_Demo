import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../Login/Login.css';
import { useState } from "react";
import Register from "../Register/Register";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () =>{
        navigate('/Register')
    }
    const handleName = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleAdmin = () => {
        if (!username.trim()) {
            alert("Please enter a username");
            return;
        }

        if (!password.trim()) {
            alert("Please enter a password");
            return;
        }

      
        navigate('/Admin');
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
                                        <label>Password</label>
                                        <input type='password' value={password} onChange={handlePassword} placeholder='Enter Password' />
                                    </div>
                                    <div className='btn-submit'>
                                        <span onClick={handleAdmin}>Submit</span>
                                    </div>
                                </div>
                                <div className='regi'>
                                    <a>New user? Register here</a>
                                    <a className="reg-a"style={{ cursor: "pointer" }} onClick={handleRegister}>Registration</a>
                                </div>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
