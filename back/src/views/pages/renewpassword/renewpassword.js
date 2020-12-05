import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import dotenv from  'dotenv'

const axios = require("axios");

const RenewPassword = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  let history = useHistory();

  const handleCreatePassword = () => {
    if (password === repeatPassword) {
      axios
        .patch(`http://localhost:3002/back/users`, {
          mail: login,
          password: password,
        })
        .then(function (response) {
          // handle success
          if (response.status == "200") {
            history.push("/");
          }
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            alert("Mot de passe trop court : au moins 8 caractères");
          }
        });
    } else {
      alert(
        "Vos mots de passe ne correspondent pas. Merci de saisir deux mots de passe identiques"
      );
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Create new password</h1>
                    <p className="text-muted">
                      Please create a new password (Min 8 characters)
                    </p>
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
                    <CInputGroup className="mb-3">
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
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="repeat password"
                        placeholder=" repeat Password"
                        autoComplete="current-password"
                        value={repeatPassword}
                        onChange={(e) => {
                          setRepeatPassword(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <CCol xs="6">
                      <CButton
                        color="primary"
                        className="px-4"
                        onClick={handleCreatePassword}
                      >
                        Create
                      </CButton>
                    </CCol>
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

export default RenewPassword;
