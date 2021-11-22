import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import googleLogo from '../../images/google-logo.png'
import './Login.css'
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
const Login = () => {
    const { allFirebase } = useAuth();
    const { googleLogin } = allFirebase;
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        googleLogin(navigate, location)
    }
    return (
        <>
            <Header></Header>
            <Container>
                <div className="row my-5" data-aos="zoom-in-up" data-aos-delay="300">
                    <div className="col-md-5 mx-auto h-100">
                        <div className="login" >
                            <div>
                                <h5 className="text-center mb-3">Login with</h5>
                                <div onClick={handleGoogleLogin} className="google-button">
                                    <div>
                                        <img style={{ width: "30px" }} className="img-fluid" src={googleLogo} alt="" />
                                    </div>
                                    <div className="mx-5">
                                        <h6 className="mb-0">Continue With Google</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Login;