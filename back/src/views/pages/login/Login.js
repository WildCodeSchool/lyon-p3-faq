import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { storeContext } from "../../../context";
import Alert from "../../../containers/Alert";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert,
  CProgress,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import dotenv from "dotenv";

const axios = require("axios");

const Login = () => {
  const [currentUser, setCurrentUser] = useContext(storeContext);
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [failAuth, setFailAuth] = useState(false);
  const [forgottenPassword, setForgottenPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  let history = useHistory();

  const handleLogin = () => {

    
    axios

      .post(`${process.env.REACT_APP_API_HOST}/back/login`, {
        login: login,
        password: password,
      })
      .then(function (response) {

       
        // handle success
        if (response.status == "200") {
          setCurrentUser({
            mail: login,
            password: password,
            id: response.data.userInfos.id,
            token: response.data.token,
            connected: true,
            name: response.data.userInfos.name,
            role_id: response.data.userInfos.role_id,
          });
          history.push("/dashboard");
        }
      })
      .catch(function (error) {
        // handle error
        setForgottenPassword(false);
        setFailAuth(true);

        setAlertMessage("Identifiants incorrects. Merci de ré-essayer!!");
        setAlertType("danger");
      });
  };

  const handleForgottenPassword = () => {
    axios
      .post(`${process.env.REACT_APP_API_HOST}/back/users/passwordrenew`, {
        mail: login,
      })
      .then(function (response) {
        // handle success
        if (response.status == "200") {
          setFailAuth(false);
          setForgottenPassword(true);

          setAlertMessage(
            "Vous venez de reçevoir un email afin de réinitialiser votre mot de passe"
          );
          setAlertType("success");
        }
      })
      .catch(function (error) {
        // handle error
      });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
    {currentUser.role_id == 5? <Alert type="danger" message= "Vous n'avez pas les autorisations nécessaires pour accéder à l'espace d'administration"></Alert>:""}


      <CContainer>

        <CRow className="justify-content-center">
          <CCol md="8">
            {failAuth || forgottenPassword ? (
              <Alert message={alertMessage} type={alertType}></Alert>
            ) : (
              ""
            )}
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        value={login}
                        onChange={(e) => {
                          setLogin(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={handleLogin}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton
                          color="link"
                          className="px-0"
                          onClick={handleForgottenPassword}
                        >
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
